import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../core/service/auth.service";
import {OAuthService} from "angular-oauth2-oidc";
import {User} from "../../../../core/model/user/user.model";
import {UserService} from "../../../../core/service/api";

@Component({
    selector: 'sr-user-profile-view',
    templateUrl: './user-profile-view.component.html',
    styleUrls: ['./user-profile-view.component.scss'],
    standalone: false
})
export class UserProfileViewComponent implements OnInit {

  kcUser: any;
  user: User = {} as User;
  isAuthed: boolean = false;

  constructor(
    private authService: AuthService,
    private oAuthService: OAuthService,
    private userService: UserService
  ) {
    this.authService.isAuthenticated.subscribe(isAuthed => {
      this.isAuthed = isAuthed;
    })
  }

  ngOnInit() {
    this.kcUser = this.oAuthService.getIdentityClaims();
    console.log(this.kcUser);

    this.userService.getUser().subscribe(data => {
      this.user = data
    })
  }

  deleteAccount() {
    window.location.href = "mailto:kontakt@swimresults.de?subject=Antrag zur Löschung des SwimResults Accounts";
  }

  changeData() {
    window.location.href = "mailto:kontakt@swimresults.de?subject=Antrag zur Änderung des SwimResults Accounts";
  }

}
