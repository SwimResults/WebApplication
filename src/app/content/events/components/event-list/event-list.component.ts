import {Component, OnDestroy} from '@angular/core';
import {MeetingImpl} from "../../../../core/model/meeting/meeting.model";
import {Subscription} from "rxjs";
import {MeetingPart} from "../../../../core/model/meeting/meeting-part.model";
import {RouteService} from "../../../../core/service/route.service";
import {EventService} from "../../../../core/service/api";
import {HeatService} from "../../../../core/service/api";
import {FetchingModel} from "../../../../core/model/common/fetching.model";
import {EventListHeatImpl} from "../../../../core/model/start/event-list-heat.model";

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
  heats: Map<number, EventListHeatImpl> = new Map<number, EventListHeatImpl>()
  fetchingHeats: FetchingModel = {fetching: false}
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
    this.fetchingHeats.fetching = true;
    this.heatService.getHeatsByMeetingForEventList(this.meetingId).subscribe(data => {
      if (data && data.events && data.events.length > 0) {
        for (let heatInfo of data.events) {
          console.log(heatInfo)
          this.heats.set(heatInfo.event_number, new EventListHeatImpl(heatInfo));
        }
        console.log("fetched heats for event list")
        console.log(this.heats)
      }
      this.fetchingHeats.fetching = false;
    })
  }

  ngOnDestroy() {
    this.meetingSubscription.unsubscribe();
    this.meetingIdSubscription.unsubscribe();
  }
}
