import {Component, OnDestroy} from '@angular/core';
import {MeetingImpl} from "../../../../../core/model/meeting/meeting.model";
import {Subscription} from "rxjs";
import {RouteService} from "../../../../../core/service/route.service";
import {Sponsor} from "../../../../../core/model/meeting/sponsor.model";

@Component({
    selector: 'sr-widget-coming-soon-medium',
    templateUrl: './widget-sponsors-medium.component.html',
    styleUrls: ['./widget-sponsors-medium.component.scss'],
    standalone: false
})
export class WidgetSponsorsMediumComponent implements OnDestroy {
    meeting?: MeetingImpl;
    meetingId?: string;
    meetingSubscription: Subscription;
    meetingIdSubscription: Subscription;

    sponsor?: Sponsor;

    constructor(
        private routeService: RouteService
    ) {
        this.meetingSubscription = this.routeService.currentMeeting.subscribe(data => {
            this.meeting = new MeetingImpl(data.meeting);
            console.log("fetched meeting:")
            console.log(this.meeting)

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
