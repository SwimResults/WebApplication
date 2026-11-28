import {Component, Input, OnChanges, inject} from '@angular/core';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {MatIcon} from "@angular/material/icon";
import {LiveStatusImpl} from '@swimresults/angular';
import {PanelComponent} from "../../../../../shared/elements/panel/panel.component";
import {LiveText, liveStatusText} from "../../../../../shared/live/live-status-text";

/** Live page: status or message banner, info message, meeting warnings, data freshness. */
@Component({
    selector: 'sr-live-status-banner',
    templateUrl: './live-status-banner.component.html',
    styleUrls: ['./live-status-banner.component.scss'],
    imports: [TranslateModule, MatIcon, PanelComponent]
})
export class LiveStatusBannerComponent implements OnChanges {
    private translateService = inject(TranslateService);

    @Input() status?: LiveStatusImpl;

    statusText?: LiveText;

    ngOnChanges() {
        this.statusText = this.status ? liveStatusText(this.status, this.translateService.currentLang) : undefined;
    }
}
