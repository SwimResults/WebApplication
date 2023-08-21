import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { environment } from 'src/environments/environment';
import {SidebarMenuService} from "./core/service/sidebar-menu.service";

@Component({
  selector: 'sr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'swimresults';

  build: string = "";
  showBuild: boolean = true;
  sidebarState = "";

  environment = environment.environment;

  constructor(
    private translateService: TranslateService,
    private menuService: SidebarMenuService
  ) {
    this.showBuild = this.environment != 'productive'

    this.fetchBuild().then(r => {
      this.build = r;
    });
    this.translateService.use(navigator.language);
    this.menuService.viewType.subscribe(data => {
      this.sidebarState = data;
    })
  }

  async fetchBuild() {
    const response = await fetch("assets/release.txt");
    return await response.text();
  }

  toggleBuild() {
    this.showBuild = !this.showBuild;
  }

  hideSidebar() {
    this.menuService.setViewType("hidden");
  }
}
