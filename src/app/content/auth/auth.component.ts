import {Component, OnDestroy} from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {filter, Subscription} from "rxjs";
import {AuthService} from "../../core/service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'sr-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnDestroy {
  user: any;

  private eventSubscription: Subscription

  constructor(
    private oAuthService: OAuthService,
    private authService: AuthService,
    private router: Router
  ) {
    this.eventSubscription = this.oAuthService.events
      .pipe(filter((e) => e.type === 'token_received'))
      .subscribe((e) => {
        this.user = this.oAuthService.getIdentityClaims();

        console.log(e);

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
