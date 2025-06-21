import { Component, OnDestroy, inject } from '@angular/core';
import {MeetingImpl} from "../../../../../core/model/meeting/meeting.model";
import {Subscription} from "rxjs";
import {RouteService} from "../../../../../core/service/route.service";
import {Sponsor} from "../../../../../core/model/meeting/sponsor.model";
import {WidgetTitleComponent} from '../../../widget-title/widget-title.component';
import {WidgetInfoTextComponent} from '../../../widget-info-text/widget-info-text.component';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-widget-coming-soon-medium',
    templateUrl: './widget-sponsors-medium.component.html',
    styleUrls: ['./widget-sponsors-medium.component.scss'],
    imports: [WidgetTitleComponent, WidgetInfoTextComponent, TranslateModule]
})
export class WidgetSponsorsMediumComponent implements OnDestroy {
    private routeService = inject(RouteService);

    meeting?: MeetingImpl;
    meetingId?: string;
    meetingSubscription: Subscription;
    meetingIdSubscription: Subscription;

    sponsor?: Sponsor;

    constructor() {
        this.meetingSubscription = this.routeService.currentMeeting.subscribe(data => {
            this.meeting = new MeetingImpl(data.meeting);

            if (this.meeting && this.meeting.data && this.meeting.data.sponsors && this.meeting.data.sponsors.length > 0) {
                this.sponsor = this.meeting.data.sponsors.at(Math.random() * 100 % this.meeting.data.sponsors.length)
            }
        })
        this.meetingIdSubscription = this.routeService.currentMeetingId.subscribe(data => {
            this.meetingId = data;
        })
    }

    ngOnDestroy() {
        this.meetingSubscription.unsubscribe();
        this.meetingIdSubscription.unsubscribe();
    }
}
