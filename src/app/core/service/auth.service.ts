import { Injectable } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {authConfig} from "../../config/auth.config";
import {ReplaySubject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private oAuthService: OAuthService,
    private router: Router
  ) {
    this.isAuthenticatedSubject.next(false);
    this.setup()
  }

  setup() {
    this.oAuthService.configure(authConfig);
    this.oAuthService.loadDiscoveryDocumentAndTryLogin().then(_ => {
      if (this.oAuthService.hasValidIdToken()) {
        this.isAuthenticatedSubject.next(true);
      }

      this.oAuthService.setupAutomaticSilentRefresh()
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

  setAuthenticated(authed: boolean) {
    this.isAuthenticatedSubject.next(authed);
  }
}
