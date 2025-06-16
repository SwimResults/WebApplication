import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../core/service/auth.service";
import {OAuthService} from "angular-oauth2-oidc";
import {User} from "../../../../core/model/user/user.model";
import {UserService} from "../../../../core/service/api";
import {PanelComponent} from '../../../../shared/elements/panel/panel.component';
import {BtnComponent} from '../../../../shared/elements/buttons/btn/btn.component';
import {MatIcon} from '@angular/material/icon';
import {NoContentComponent} from '../../../../shared/elements/no-content/no-content.component';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-user-profile-view',
    templateUrl: './user-profile-view.component.html',
    styleUrls: ['./user-profile-view.component.scss'],
    imports: [PanelComponent, BtnComponent, MatIcon, NoContentComponent, TranslateModule]
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
