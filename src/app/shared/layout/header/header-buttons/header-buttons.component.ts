import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {SidebarMenuService} from "../../../../core/service/sidebar-menu.service";
import {AuthService} from "../../../../core/service/auth.service";
import {OAuthService} from "angular-oauth2-oidc";
import {MatDialog} from "@angular/material/dialog";
import {
    ReportSubmissionDialogComponent
} from "../../../../content/report/components/report-submission-dialog/report-submission-dialog.component";

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
