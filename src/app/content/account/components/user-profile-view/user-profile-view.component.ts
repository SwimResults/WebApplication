import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../core/service/auth.service";
import {OAuthService} from "angular-oauth2-oidc";

@Component({
  selector: 'sr-user-profile-view',
  templateUrl: './user-profile-view.component.html',
  styleUrls: ['./user-profile-view.component.scss']
})
export class UserProfileViewComponent implements OnInit {

  user: any;
  isAuthed: boolean = false;

  constructor(
    private authService: AuthService,
    private oAuthService: OAuthService
  ) {
    this.authService.isAuthenticated.subscribe(isAuthed => {
      this.isAuthed = isAuthed;
    })
  }

  ngOnInit() {
    this.user = this.oAuthService.getIdentityClaims();
    console.log(this.user);
  }

}
