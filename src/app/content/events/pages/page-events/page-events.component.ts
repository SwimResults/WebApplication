import {Component, OnDestroy} from '@angular/core';
import {MeetingImpl} from "../../../../core/model/meeting/meeting.model";
import {RouteService} from "../../../../core/service/route.service";
import {Subscription} from "rxjs";
import {MeetingEvent} from "../../../../core/model/meeting/meeting-event.model";
import {EventService} from "../../../../core/service/api/meeting/event.service";

@Component({
  selector: 'sr-page-events',
  templateUrl: './page-events.component.html',
  styleUrls: ['./page-events.component.scss']
})
export class PageEventsComponent implements OnDestroy {
  meeting?: MeetingImpl;
  meetingSubscription: Subscription;
  events: MeetingEvent[] = [];

  constructor(
    private routeService: RouteService,
    private eventService: EventService
  ) {
    this.meetingSubscription = this.routeService.currentEvent.subscribe(data => {
      this.meeting = new MeetingImpl(data.meeting);
      this.eventService.getEventsByMeeting(this.meeting.meet_id).subscribe(data => {
        this.events = data;
      });
    })
  }

  ngOnDestroy() {
    this.meetingSubscription.unsubscribe();
  }
}
