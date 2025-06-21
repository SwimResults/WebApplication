import { Injectable, inject } from '@angular/core';
import {OAuthService, TokenResponse} from "angular-oauth2-oidc";
import {authConfig} from "../../config/auth.config";
import {ReplaySubject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private oAuthService = inject(OAuthService);
    private router = inject(Router);

    private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
    public isAuthenticated = this.isAuthenticatedSubject.asObservable();

    private scopesSubject = new ReplaySubject<string[]>(1);
    public scopes = this.scopesSubject.asObservable();

    constructor() {
        this.scopesSubject.next([]);
        this.setup();
    }

    setup() {
        this.oAuthService.configure(authConfig);
        this.oAuthService.loadDiscoveryDocumentAndTryLogin().then(_ => {
            this.refreshToken().then(_ => {
                this.oAuthService.setupAutomaticSilentRefresh();
            }).catch(_ => {
                this.setAuthenticated(false);
            });
        })
    }

    login() {
        this.oAuthService.initCodeFlow(this.router.url)
    }

    logout() {
        this.oAuthService.revokeTokenAndLogout().then(_ => {
            this.isAuthenticatedSubject.next(false);
        });
    }

    loadTokenData() {
        if (this.oAuthService.hasValidIdToken()) {
            this.isAuthenticatedSubject.next(true);
            this.setScopes(this.oAuthService.getGrantedScopes())
        } else {
            this.setAuthenticated(false);
        }
    }


    refreshToken(): Promise<TokenResponse> {
        return new Promise<TokenResponse>((resolve, reject) => {
            this.oAuthService.refreshToken().then(response => {
                this.loadTokenData()
                resolve(response);
            }).catch(reason => {
                reject(reason);
            });
        });
    }


    setAuthenticated(authed: boolean) {
        this.isAuthenticatedSubject.next(authed);
    }

    setScopes(scopes: object) {
        this.scopesSubject.next(scopes as string[]);
    }
}
