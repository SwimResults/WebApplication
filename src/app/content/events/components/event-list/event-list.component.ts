import {Component, OnDestroy} from '@angular/core';
import {MeetingImpl} from "../../../../core/model/meeting/meeting.model";
import {Subscription} from "rxjs";
import {MeetingPart} from "../../../../core/model/meeting/meeting-part.model";
import {RouteService} from "../../../../core/service/route.service";
import {EventService} from "../../../../core/service/api";
import {HeatImpl} from "../../../../core/model/start/heat.model";
import {HeatService} from "../../../../core/service/api";
import {FetchingModel} from "../../../../core/model/common/fetching.model";

@Component({
  selector: 'sr-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnDestroy {
  meeting?: MeetingImpl;
  meetingId?: string;
  meetingSubscription: Subscription;
  meetingIdSubscription: Subscription;
  parts: MeetingPart[] = [];
  heats: Map<number, HeatImpl[]> = new Map<number, HeatImpl[]>()
  fetchingHeats: boolean = true;
  fetchingParts: FetchingModel = {fetching: false};

  constructor(
    private routeService: RouteService,
    private eventService: EventService,
    private heatService: HeatService
  ) {
    this.meetingSubscription = this.routeService.currentMeeting.subscribe(data => {
      this.meeting = new MeetingImpl(data.meeting);
    })
    this.meetingIdSubscription = this.routeService.currentMeetingId.subscribe(data => {
      this.meetingId = data;
      this.fetchingParts.fetching = true;
      this.fetchHeats();
      if (this.meetingId) {
        this.eventService.getEventsAsPartsByMeeting(this.meetingId).subscribe(data => {
          this.parts = data;
          this.fetchingParts.fetching = false;
        });
      }
    })
  }

  fetchHeats() {
    if (!this.meetingId) return;
    this.heatService.getHeatsByMeeting(this.meetingId).subscribe(data => {
      if (data && data.length > 0) {
        for (let heat of data) {
          if (!this.heats.has(heat.event)) {
            this.heats.set(heat.event, []);
          }
          this.heats.get(heat.event)?.push(new HeatImpl(heat));
        }
      }
      this.fetchingHeats = false;
    }, _ => this.fetchingHeats = false)
  }

  ngOnDestroy() {
    this.meetingSubscription.unsubscribe();
    this.meetingIdSubscription.unsubscribe();
  }
}
