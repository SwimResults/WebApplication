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
  private meetingSubscription: Subscription;

  constructor(
    private routeService: RouteService
  ) {
    this.meetingSubscription = this.routeService.currentEvent.subscribe(data => {
      this.meeting = data.meeting;
    })
  }
  ngOnDestroy() {
    this.meetingSubscription.unsubscribe();
  }
}
