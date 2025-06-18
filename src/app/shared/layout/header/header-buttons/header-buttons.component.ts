import {Component} from '@angular/core';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {SidebarMenuService} from "../../../../core/service/sidebar-menu.service";
import {AuthService} from "../../../../core/service/auth.service";
import {OAuthService} from "angular-oauth2-oidc";
import {MatMenu, MatMenuTrigger} from '@angular/material/menu';
import {MatIcon} from '@angular/material/icon';
import {MatDivider} from '@angular/material/divider';
import {IsAdminDirective} from '../../../../core/directive/is-admin.directive';
import {RouterLink} from '@angular/router';
import {IsAuthedDirective} from '../../../../core/directive/is-authed.directive';
import {ReportDialogService} from "../../../../core/service/report-dialog.service";

@Component({
    selector: 'sr-header-buttons',
    templateUrl: './header-buttons.component.html',
    styleUrls: ['./header-buttons.component.scss'],
    imports: [MatMenuTrigger, MatIcon, MatMenu, MatDivider, IsAdminDirective, RouterLink, IsAuthedDirective, TranslateModule]
})
export class HeaderButtonsComponent {
  kcUser: any;

  constructor(
    private translateService: TranslateService,
    private menuService: SidebarMenuService,
    private authService: AuthService,
    private oAuthService: OAuthService,
    private reportDialogService: ReportDialogService
  ) {
    this.authService.isAuthenticated.subscribe(isAuthed => {
      if (isAuthed) {
        this.kcUser = this.oAuthService.getIdentityClaims();
      }
    })
  }

  changeLocale(lang: string) {
    this.translateService.use(lang);
    window.localStorage.setItem("language", lang);
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

    openFeedbackDialog() {
        location.href = "mailto:feedback@swimresults.de?subject=Feedback SwimResults";
    }

    openReportDialog() {
        this.reportDialogService.openReportDialog();
    }
}
