import {Component, OnDestroy} from '@angular/core';
import {Meeting} from "../../../../core/model/meeting/meeting.model";
import {Subscription} from "rxjs";
import {RouteService} from "../../../../core/service/route.service";

@Component({
  selector: 'sr-page-teams-event',
  templateUrl: './page-teams-event.component.html',
  styleUrls: ['./page-teams-event.component.scss']
})
export class PageTeamsEventComponent implements OnDestroy {
  meeting: Meeting = {} as Meeting;
  meetingId: string | undefined;
  private meetingSubscription: Subscription;
  private meetingIdSubscription: Subscription;

  constructor(
    private routeService: RouteService
  ) {
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
