import {Component, Input, OnChanges, OnDestroy, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Subscription} from "rxjs";
import {HeatTimesComponent} from '../../elements/heat-times/heat-times.component';
import {IconPanelComponent} from '../../elements/icon-panel/icon-panel.component';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {MatIcon} from "@angular/material/icon";
import {LiveStatusImpl} from '@swimresults/angular';
import {LiveStatusService} from "../../../core/service/live-status.service";
import {LiveText, liveStatusText} from "../../live/live-status-text";

@Component({
    selector: 'sr-live-bar',
    templateUrl: './live-bar.component.html',
    styleUrls: ['./live-bar.component.scss'],
    imports: [RouterLink, HeatTimesComponent, IconPanelComponent, TranslateModule, MatIcon]
})
export class LiveBarComponent implements OnChanges, OnDestroy {
    private liveStatusService = inject(LiveStatusService);
    private translateService = inject(TranslateService);

    @Input() meetingId?: string;

    status?: LiveStatusImpl;
    statusText?: LiveText;

    private subscription?: Subscription;

    ngOnChanges() {
        this.subscription?.unsubscribe();
        this.status = undefined;
        if (!this.meetingId) return;
        this.subscription = this.liveStatusService.watch(this.meetingId).subscribe(status => {
            this.status = status;
            this.statusText = liveStatusText(status, this.translateService.currentLang);
        });
    }

    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }
}
