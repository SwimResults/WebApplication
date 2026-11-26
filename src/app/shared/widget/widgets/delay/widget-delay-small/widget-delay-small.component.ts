import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {Subscription} from "rxjs";
import {RouteService} from "../../../../../core/service/route.service";
import {SpinnerComponent} from '../../../../elements/spinner/spinner.component';
import {WidgetTitleComponent} from '../../../widget-title/widget-title.component';
import {WidgetInfoTextComponent} from '../../../widget-info-text/widget-info-text.component';
import {TranslateModule} from '@ngx-translate/core';
import {FetchingModel, HeatService, HeatImpl} from '@swimresults/angular';

@Component({
    selector: 'sr-widget-delay-small',
    templateUrl: './widget-delay-small.component.html',
    styleUrls: ['./widget-delay-small.component.scss'],
    imports: [SpinnerComponent, WidgetTitleComponent, WidgetInfoTextComponent, TranslateModule]
})
export class WidgetDelaySmallComponent implements OnInit, OnDestroy {
    private heatService = inject(HeatService);
    private routeService = inject(RouteService);

    meetingId?: string;
    meetingIdSubscription: Subscription;

    fetching: FetchingModel = {fetching: false} as FetchingModel;

    heat?: HeatImpl;

    delayedHours: number = 0;
    delayedMinutes: number = 0;

    interval: any;

    delayInterval: number = 60000;

    constructor() {
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
