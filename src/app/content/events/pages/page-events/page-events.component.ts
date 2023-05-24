import {Component, OnDestroy} from '@angular/core';
import {MeetingImpl} from "../../../../core/model/meeting/meeting.model";
import {RouteService} from "../../../../core/service/route.service";
import {Subscription} from "rxjs";
import {Start} from "../../../../core/model/start/start.model";
import {StartService} from "../../../../core/service/api";
import {StartListTileConfig} from "../../../../core/model/start/start-list-tile-config.model";

@Component({
  selector: 'sr-page-events',
  templateUrl: './page-events.component.html',
  styleUrls: ['./page-events.component.scss']
})
export class PageEventsComponent implements OnDestroy {
  meeting?: MeetingImpl;
  meetingSubscription: Subscription;
  starts: Start[] = [];
  testStarts: Start[] = [];
  config: StartListTileConfig = {showAthlete: true, laneAsIcon: true} as StartListTileConfig;

  constructor(
    private routeService: RouteService,
    private startService: StartService
  ) {
    this.meetingSubscription = this.routeService.currentEvent.subscribe(data => {
      this.meeting = new MeetingImpl(data.meeting);
      this.startService.getStartsByMeeting(this.meeting.meet_id).subscribe(data => {
        this.starts = data;
      });
      this.startService.getStartsByMeetingAndEventAndHeat(this.meeting.meet_id, "30", 11).subscribe(data => {
        this.testStarts = data;
      });
    })
  }

  ngOnDestroy() {
    this.meetingSubscription.unsubscribe();
  }
}
