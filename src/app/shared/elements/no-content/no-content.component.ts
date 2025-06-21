import { Component, Input, inject } from '@angular/core';
import {TranslateModule, TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'sr-no-content',
    templateUrl: './no-content.component.html',
    styleUrls: ['./no-content.component.scss'],
    imports: [TranslateModule]
})
export class NoContentComponent {
  private translateService = inject(TranslateService);

  @Input() serviceOffline?: "MEETING" | "ATHLETE" | "START" | "IMPORT" | "USER";

  systemParam = {system: this.serviceOffline}

  constructor() {
      if (this.serviceOffline) {
        this.translateService.get('COMMON.ERROR.SERVICE_OFFLINE.' + this.serviceOffline).subscribe(sys => {
          this.systemParam.system = sys;
        })
      }
  }
}
