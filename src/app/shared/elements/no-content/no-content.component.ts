import {Component, Input} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'sr-no-content',
  templateUrl: './no-content.component.html',
  styleUrls: ['./no-content.component.scss']
})
export class NoContentComponent {
  @Input() serviceOffline?: "MEETING" | "ATHLETE" | "START" | "IMPORT" | "USER";

  systemParam = {system: this.serviceOffline}

  constructor(
    private translateService: TranslateService
  ) {
      if (this.serviceOffline) {
        this.translateService.get('COMMON.ERROR.SERVICE_OFFLINE.' + this.serviceOffline).subscribe(sys => {
          this.systemParam.system = sys;
        })
      }
  }
}
