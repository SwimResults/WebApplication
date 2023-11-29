import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {SidebarMenuService} from "../../../../core/service/sidebar-menu.service";
import {AuthService} from "../../../../core/service/auth.service";
import {OAuthService} from "angular-oauth2-oidc";

@Component({
  selector: 'sr-header-buttons',
  templateUrl: './header-buttons.component.html',
  styleUrls: ['./header-buttons.component.scss']
})
export class HeaderButtonsComponent {
  kcUser: any;

  constructor(
    private translateService: TranslateService,
    private menuService: SidebarMenuService,
    private authService: AuthService,
    private oAuthService: OAuthService
  ) {
    this.authService.isAuthenticated.subscribe(isAuthed => {
      if (isAuthed) {
        this.kcUser = this.oAuthService.getIdentityClaims();
      }
    })
  }

  changeLocale(lang: string) {
    this.translateService.use(lang);
  }

  showMenu() {
    this.menuService.setViewType("full");
  }

  hideMenu() {
    this.menuService.setViewType("hidden");
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
