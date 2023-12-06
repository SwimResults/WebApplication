import {Component, OnDestroy} from '@angular/core';
import {MeetingImpl} from "../../../../core/model/meeting/meeting.model";
import {Subscription} from "rxjs";
import {MeetingPart} from "../../../../core/model/meeting/meeting-part.model";
import {RouteService} from "../../../../core/service/route.service";
import {EventService} from "../../../../core/service/api";
import {FetchingModel} from "../../../../core/model/common/fetching.model";

@Component({
  selector: 'sr-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnDestroy {
    meeting?: MeetingImpl;
    meetingId?: string;
    meetingSubscription: Subscription;
    meetingIdSubscription: Subscription;
    parts: MeetingPart[] = [];
    fetchingParts: FetchingModel = {fetching: false};

    constructor(
        private routeService: RouteService,
        private eventService: EventService,
    ) {
        this.meetingSubscription = this.routeService.currentMeeting.subscribe(data => {
            this.meeting = new MeetingImpl(data.meeting);
        })
        this.meetingIdSubscription = this.routeService.currentMeetingId.subscribe(data => {
            this.meetingId = data;
            this.fetchingParts.fetching = true;
            if (this.meetingId) {
                this.eventService.getEventsAsPartsByMeeting(this.meetingId).subscribe(data => {
                    this.parts = data;
                    this.fetchingParts.fetching = false;
                });
            }
        })
    }

    ngOnDestroy() {
        this.meetingSubscription.unsubscribe();
        this.meetingIdSubscription.unsubscribe();
    }
}
