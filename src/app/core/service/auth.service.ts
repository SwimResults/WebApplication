import { Injectable } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {authConfig} from "../../config/auth.config";
import {ReplaySubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private oAuthService: OAuthService
  ) {
    this.isAuthenticatedSubject.next(false);
    this.setup()
  }

  setup() {
    this.oAuthService.configure(authConfig);
    this.oAuthService.loadDiscoveryDocumentAndTryLogin()
    if (this.oAuthService.hasValidIdToken()) {
      this.isAuthenticatedSubject.next(true);
    }
  }

  login() {
    this.oAuthService.initCodeFlow()
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
