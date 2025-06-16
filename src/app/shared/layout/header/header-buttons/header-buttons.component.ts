import {Component} from '@angular/core';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {SidebarMenuService} from "../../../../core/service/sidebar-menu.service";
import {AuthService} from "../../../../core/service/auth.service";
import {OAuthService} from "angular-oauth2-oidc";
import {MatDialog} from "@angular/material/dialog";
import {
    ReportSubmissionDialogComponent
} from "../../../../content/report/components/report-submission-dialog/report-submission-dialog.component";
import {MatMenu, MatMenuTrigger} from '@angular/material/menu';
import {MatIcon} from '@angular/material/icon';
import {MatDivider} from '@angular/material/divider';
import {IsAdminDirective} from '../../../../core/directive/is-admin.directive';
import {RouterLink} from '@angular/router';
import {IsAuthedDirective} from '../../../../core/directive/is-authed.directive';

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
    private matDialog: MatDialog
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
        this.matDialog.open(ReportSubmissionDialogComponent, {
            width: '95%',
            maxWidth: '950px'
        })
    }
}
