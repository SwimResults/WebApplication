import {Injectable} from '@angular/core';
import {OAuthService, TokenResponse} from "angular-oauth2-oidc";
import {authConfig} from "../../config/auth.config";
import {ReplaySubject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
    public isAuthenticated = this.isAuthenticatedSubject.asObservable();

    private scopesSubject = new ReplaySubject<string[]>(1);
    public scopes = this.scopesSubject.asObservable();

    constructor(
        private oAuthService: OAuthService,
        private router: Router
    ) {
        this.scopesSubject.next([]);
        this.setup();
    }

    setup() {
        console.log("setup oauth service");
        this.oAuthService.configure(authConfig);
        this.oAuthService.loadDiscoveryDocumentAndTryLogin().then(_ => {
            console.log("finished load discovery");
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
        console.log("scopes set!");
        let s: string[];
        s = scopes as string[];
        this.scopesSubject.next(s);
    }
}
