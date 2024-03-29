import {Component, OnDestroy, OnInit} from '@angular/core';
import {FetchingModel} from "../../../../core/model/common/fetching.model";
import {count, Subscription} from "rxjs";
import {RouteService} from "../../../../core/service/route.service";

@Component({
  selector: 'sr-widget-n-o-small',
  templateUrl: './widget-n-o-small.component.html',
  styleUrls: ['./widget-n-o-small.component.scss']
})
export class WidgetNOSmallComponent implements OnInit, OnDestroy {
    meetingId?: string;
    meetingIdSubscription?: Subscription;

    fetching: FetchingModel = {fetching: true} as FetchingModel;

    private _countName: string = "Anzahl";
    n: number = 0;

    constructor(
        protected routeService?: RouteService
    ) {
        if (this.routeService)
            this.meetingIdSubscription = this.routeService.currentMeetingId.subscribe(data => {
                this.meetingId = data;
            })
    }

    ngOnInit() {
        this.fetching.fetching = true;
        this.fetchNumber();
    }

    ngOnDestroy() {
        if (this.meetingIdSubscription)
            this.meetingIdSubscription.unsubscribe();
    }

    fetchNumber() {
        this.n = 42;
        this.fetching.fetching = false;
    }


    get countName(): string {
        return this._countName;
    }

    set countName(value: string) {
        this._countName = value;
    }

    protected readonly count = count;
}
