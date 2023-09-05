import {Component, OnDestroy} from '@angular/core';
import {MeetingImpl} from "../../../../../core/model/meeting/meeting.model";
import {Subscription} from "rxjs";
import {RouteService} from "../../../../../core/service/route.service";

@Component({
  selector: 'sr-widget-meeting-large',
  templateUrl: './widget-meeting-large.component.html',
  styleUrls: ['./widget-meeting-large.component.scss']
})
export class WidgetMeetingLargeComponent implements OnDestroy {
  meeting?: MeetingImpl;
  meetingId?: string;
  meetingSubscription: Subscription;
  meetingIdSubscription: Subscription;

  constructor(
    private routeService: RouteService
  ) {
    this.meetingSubscription = this.routeService.currentEvent.subscribe(data => {
      this.meeting = new MeetingImpl(data.meeting);
      console.log("fetched meeting:")
      console.log(this.meeting)
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
