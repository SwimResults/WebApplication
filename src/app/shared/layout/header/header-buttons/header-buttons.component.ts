import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'sr-header-buttons',
  templateUrl: './header-buttons.component.html',
  styleUrls: ['./header-buttons.component.scss']
})
export class HeaderButtonsComponent {

  constructor(
    private translateService: TranslateService
  ) {
  }

  changeLocale(lang: string) {
    this.translateService.use(lang);
  }
}
