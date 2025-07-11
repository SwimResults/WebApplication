import { Component, OnDestroy, inject } from '@angular/core';
import {Meeting} from "../../../../core/model/meeting/meeting.model";
import {RouteService} from "../../../../core/service/route.service";
import {Subscription} from "rxjs";
import {AthleteListViewComponent} from '../../components';

@Component({
    selector: 'sr-page-athletes-event',
    templateUrl: './page-athletes-event.component.html',
    styleUrls: ['./page-athletes-event.component.scss'],
    imports: [AthleteListViewComponent]
})
export class PageAthletesEventComponent implements OnDestroy {
  private routeService = inject(RouteService);

  meeting: Meeting = {} as Meeting;
  meetingId: string | undefined;
  private meetingSubscription: Subscription;
  private meetingIdSubscription: Subscription;

  constructor() {
    this.meetingIdSubscription = this.routeService.currentMeetingId.subscribe(data => {
      this.meetingId = data;
    })
    this.meetingSubscription = this.routeService.currentMeeting.subscribe(data => {
      this.meeting = data.meeting;
    })
  }
  ngOnDestroy() {
    this.meetingIdSubscription.unsubscribe();
    this.meetingSubscription.unsubscribe();
  }

}
