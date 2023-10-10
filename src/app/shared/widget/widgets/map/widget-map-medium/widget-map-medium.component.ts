import {Component, OnDestroy} from '@angular/core';
import {MeetingImpl} from "../../../../../core/model/meeting/meeting.model";
import {Subscription} from "rxjs";
import {Team} from "../../../../../core/model";
import {RouteService} from "../../../../../core/service/route.service";
import {TeamService} from "../../../../../core/service/api";

@Component({
  selector: 'sr-widget-map-medium',
  templateUrl: './widget-map-medium.component.html',
  styleUrls: ['./widget-map-medium.component.scss']
})
export class WidgetMapMediumComponent implements OnDestroy {
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
