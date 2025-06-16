import {Component, OnDestroy} from '@angular/core';
import {MeetingImpl} from "../../../../../core/model/meeting/meeting.model";
import {Subscription} from "rxjs";
import {RouteService} from "../../../../../core/service/route.service";
import {Team} from "../../../../../core/model";
import {TeamService} from "../../../../../core/service/api";
import {MatIcon} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-widget-meeting-large',
    templateUrl: './widget-meeting-large.component.html',
    styleUrls: ['./../widget-meeting.component.scss'],
    imports: [MatIcon, RouterLink, TranslateModule]
})
export class WidgetMeetingLargeComponent implements OnDestroy {
  meeting?: MeetingImpl;
  meetingId?: string;
  meetingSubscription: Subscription;
  meetingIdSubscription: Subscription;

  organizer?: Team;

  constructor(
    private routeService: RouteService,
    private teamService: TeamService
  ) {
    this.meetingSubscription = this.routeService.currentMeeting.subscribe(data => {
      this.meeting = new MeetingImpl(data.meeting);
      console.log("fetched meeting:")
      console.log(this.meeting)

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
