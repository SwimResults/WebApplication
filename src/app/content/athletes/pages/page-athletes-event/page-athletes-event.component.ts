import {Component, OnDestroy} from '@angular/core';
import {Meeting} from "../../../../core/model/meeting/meeting.model";
import {RouteService} from "../../../../core/service/route.service";
import {Subscription} from "rxjs";
import {AthleteListViewComponent} from '../../components/athlete-list-view/athlete-list-view.component';

@Component({
    selector: 'sr-page-athletes-event',
    templateUrl: './page-athletes-event.component.html',
    styleUrls: ['./page-athletes-event.component.scss'],
    imports: [AthleteListViewComponent]
})
export class PageAthletesEventComponent implements OnDestroy {
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
