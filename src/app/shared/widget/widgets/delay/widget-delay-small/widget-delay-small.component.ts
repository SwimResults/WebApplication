import {Component, OnDestroy, OnInit} from '@angular/core';
import {FetchingModel} from "../../../../../core/model/common/fetching.model";
import {HeatService} from "../../../../../core/service/api";
import {HeatImpl} from "../../../../../core/model/start/heat.model";
import {Subscription} from "rxjs";
import {RouteService} from "../../../../../core/service/route.service";
import {SpinnerComponent} from '../../../../elements/spinner/spinner.component';
import {WidgetTitleComponent} from '../../../widget-title/widget-title.component';
import {WidgetInfoTextComponent} from '../../../widget-info-text/widget-info-text.component';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-widget-delay-small',
    templateUrl: './widget-delay-small.component.html',
    styleUrls: ['./widget-delay-small.component.scss'],
    imports: [SpinnerComponent, WidgetTitleComponent, WidgetInfoTextComponent, TranslateModule]
})
export class WidgetDelaySmallComponent implements OnInit, OnDestroy {
    meetingId?: string;
    meetingIdSubscription: Subscription;

    fetching: FetchingModel = {fetching: false} as FetchingModel;

    heat?: HeatImpl;

    delayedHours: number = 0;
    delayedMinutes: number = 0;

    interval: any;

    delayInterval: number = 60000;

    constructor(
        private heatService: HeatService,
        private routeService: RouteService
    ) {
        this.meetingIdSubscription = this.routeService.currentMeetingId.subscribe(data => {
            this.meetingId = data;
        })
    }
    ngOnInit() {
        this.fetchCurrentDelay();
        this.interval = setInterval(() => {
            console.log("DELAY CYCLE RUNNING: interval: " + this.delayInterval + " rnd: " + Math.random());
            this.fetchCurrentDelay();
        }, this.delayInterval);

    }

    fetchCurrentDelay() {
        if (!this.meetingId) return;
        this.fetching.fetching = true;
        this.heatService.getCurrentHeat(this.meetingId).subscribe({
            next: data => {
                this.heat = new HeatImpl(data);
                const delay = this.heat.getDelayHoursAndMinutes();
                this.delayedHours = delay[0];
                this.delayedMinutes = delay[1];
                this.fetching.fetching = false;
            },
            error: _ => this.fetching.fetching = false
        })
    }

    ngOnDestroy() {
        this.meetingIdSubscription.unsubscribe();
        clearInterval(this.interval);
    }
}
