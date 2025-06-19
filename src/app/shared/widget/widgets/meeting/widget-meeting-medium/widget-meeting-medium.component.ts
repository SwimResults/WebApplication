import { Component, OnDestroy, inject } from '@angular/core';
import {MeetingImpl} from "../../../../../core/model/meeting/meeting.model";
import {Subscription} from "rxjs";
import {RouteService} from "../../../../../core/service/route.service";
import {MatIcon} from '@angular/material/icon';

@Component({
    selector: 'sr-widget-meeting-medium',
    templateUrl: './widget-meeting-medium.component.html',
    styleUrls: ['./../widget-meeting.component.scss'],
    imports: [MatIcon]
})
export class WidgetMeetingMediumComponent implements OnDestroy {
  private routeService = inject(RouteService);

  meeting?: MeetingImpl;
  meetingId?: string;
  meetingSubscription: Subscription;
  meetingIdSubscription: Subscription;

  constructor() {
    this.meetingSubscription = this.routeService.currentMeeting.subscribe(data => {
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
