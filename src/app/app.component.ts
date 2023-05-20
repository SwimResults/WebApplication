import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'sr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'swimresults';

  build: string = "";
  showBuild: boolean = true;

  constructor(
    private translateService: TranslateService
  ) {
    this.fetchBuild().then(r => {
      this.build = r;
    });
    this.translateService.use(navigator.language);
  }

  async fetchBuild() {
    const response = await fetch("assets/release.txt");
    return await response.text();
  }

  toggleBuild() {
    this.showBuild = !this.showBuild;
  }
}
