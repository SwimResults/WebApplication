import {Component, OnDestroy} from '@angular/core';
import {Meeting} from "../../../../core/model/meeting/meeting.model";
import {RouteService} from "../../../../core/service/route.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'sr-page-athletes-event',
  templateUrl: './page-athletes-event.component.html',
  styleUrls: ['./page-athletes-event.component.scss']
})
export class PageAthletesEventComponent implements OnDestroy {
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
