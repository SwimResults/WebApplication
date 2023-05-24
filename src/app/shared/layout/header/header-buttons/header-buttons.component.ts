import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {SidebarMenuService} from "../../../../core/service/sidebar-menu.service";

@Component({
  selector: 'sr-header-buttons',
  templateUrl: './header-buttons.component.html',
  styleUrls: ['./header-buttons.component.scss']
})
export class HeaderButtonsComponent {

  constructor(
    private translateService: TranslateService,
    private menuService: SidebarMenuService
  ) {
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
}
