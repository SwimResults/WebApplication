import { Component, OnDestroy, inject } from '@angular/core';
import {Subscription} from "rxjs";
import {RouteService} from "../../../../../core/service/route.service";
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {MeetingImpl, Team, TeamService} from '@swimresults/angular';

@Component({
    selector: 'sr-widget-meeting-large',
    templateUrl: './widget-meeting-large.component.html',
    styleUrls: ['./../widget-meeting.component.scss'],
    imports: [MatIcon, RouterLink, TranslateModule]
})
export class WidgetMeetingLargeComponent implements OnDestroy {
  private routeService = inject(RouteService);
  private teamService = inject(TeamService);

  meeting?: MeetingImpl;
  meetingId?: string;
  meetingSubscription: Subscription;
  meetingIdSubscription: Subscription;

  organizer?: Team;

  constructor() {
    this.meetingSubscription = this.routeService.currentMeeting.subscribe(data => {
      this.meeting = new MeetingImpl(data.meeting);

      if (Number(this.meeting.organizer_id) != 0) {
        this.teamService.getTeamById(this.meeting.organizer_id).subscribe(data => {
          this.organizer = data;
        })
      }
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
