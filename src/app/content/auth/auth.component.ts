import { Component, OnDestroy, inject } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {filter, Subscription} from "rxjs";
import {AuthService} from "../../core/service/auth.service";
import {Router} from "@angular/router";
import {SpinnerComponent} from '../../shared/elements/spinner/spinner.component';

@Component({
    selector: 'sr-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    imports: [SpinnerComponent]
})
export class AuthComponent implements OnDestroy {
  private oAuthService = inject(OAuthService);
  private authService = inject(AuthService);
  private router = inject(Router);

  user: any;

  private eventSubscription: Subscription

  constructor() {
    this.eventSubscription = this.oAuthService.events
      .pipe(filter((e) => e.type === 'token_received'))
      .subscribe((_) => {
        this.user = this.oAuthService.getIdentityClaims();

        if (this.oAuthService.state) {
          let stateUrl = this.oAuthService.state;
          if (!stateUrl.startsWith('/')) {
            stateUrl = decodeURIComponent(stateUrl);
          }
          console.log(`There was state of ${this.oAuthService.state}, so we are sending you to: ${stateUrl}`);
          this.router.navigateByUrl(stateUrl).then(r => {
            if (!r) {
              this.router.navigateByUrl("/");
            }
          });
        }

        const scopes = this.oAuthService.getGrantedScopes();
        console.debug('scopes', scopes);

        this.authService.setAuthenticated(true);
        this.authService.setScopes(scopes)

      });
  }

  ngOnDestroy() {
    this.eventSubscription.unsubscribe();
  }
}
