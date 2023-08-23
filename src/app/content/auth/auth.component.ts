import { Component } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {filter} from "rxjs";
import {AuthService} from "../../core/service/auth.service";

@Component({
  selector: 'sr-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  user: any;

  constructor(
    private oAuthService: OAuthService,
    private authService: AuthService
  ) {
    this.oAuthService.events
      .pipe(filter((e) => e.type === 'token_received'))
      .subscribe((_) => {
        this.user = this.oAuthService.getIdentityClaims();

        const scopes = this.oAuthService.getGrantedScopes();
        console.debug('scopes', scopes);

        this.authService.setAuthenticated(true);

      });
  }
}
