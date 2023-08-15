import {Component, OnDestroy, OnInit} from '@angular/core';
import {StartService} from "../../../../core/service/api";
import {StartImpl} from "../../../../core/model/start/start.model";
import {EventService} from "../../../../core/service/api/meeting/event.service";
import {MeetingEventLivetiming} from "../../../../core/model/meeting/meeting-event-livetiming.model";
import {HeatService} from "../../../../core/service/api/start/heat.service";
import {MeetingImpl} from "../../../../core/model/meeting/meeting.model";
import {Subscription} from "rxjs";
import {RouteService} from "../../../../core/service/route.service";
import {LivetimingStartLane} from "../../../../core/model/start/livetiming-start-lane.model";

export interface ChangeHeatEvent {
  name: "event" | "heat";
  next: boolean;
}

@Component({
  selector: 'sr-livetiming',
  templateUrl: './livetiming.component.html',
  styleUrls: ['./livetiming.component.scss']
})
export class LivetimingComponent implements OnInit, OnDestroy {
  meeting?: MeetingImpl;
  meetingId?: string;
  meetingSubscription: Subscription;
  meetingIdSubscription: Subscription;

  currentEvent: number = 101;
  currentHeat: number = 1;

  starts: StartImpl[] = [];
  livetimingStarts: LivetimingStartLane[] = [];
  event: MeetingEventLivetiming = {} as MeetingEventLivetiming;
  heatAmount: number = 1;

  lanes: number = 1;
  firstLane: number = 1;

  constructor(
    private routeService: RouteService,
    private startService: StartService,
    private heatService: HeatService,
    private eventService: EventService
  ) {
    this.meetingSubscription = this.routeService.currentEvent.subscribe(data => {
      this.meeting = new MeetingImpl(data.meeting);
      if (this.meeting) {
        this.fetchData();
        if (this.meeting.location && this.meeting.location.lanes && this.meeting.location.first_lane) {
          this.lanes = this.meeting.location.lanes;
          this.firstLane = this.meeting.location.first_lane
        }
      }
    })
    this.meetingIdSubscription = this.routeService.currentMeetingId.subscribe(data => {
      this.meetingId = data;
    })
  }

  ngOnInit() {
    //this.fetchData();
  }

  ngOnDestroy() {
    this.meetingSubscription.unsubscribe();
    this.meetingIdSubscription.unsubscribe();
  }

  fetchData() {
    this.fetchHeat();
    this.fetchEvent();
  }

  fetchHeat() {
    if (this.meetingId) {
      this.startService.getStartsByMeetingAndEventAndHeat(this.meetingId, this.currentEvent, this.currentHeat).subscribe(data => {
        if (data) {
          this.starts = [];
          this.livetimingStarts = [];
          for (let start of data) {
            this.starts.push(new StartImpl(start));
          }
          if (this.starts.length > this.lanes) {
            this.lanes = this.starts.length;
          }
          if (this.starts[0].lane < this.firstLane) {
            this.firstLane = this.starts[0].lane;
          }

          // create all lanes with empty data
          for (let i = this.firstLane; i < this.lanes + this.firstLane; i++) {
            this.livetimingStarts.push({
              start: {} as StartImpl,
              free: true,
              lane: i
            })
          }

          for (let start of this.starts) {
            this.livetimingStarts[start.lane - this.firstLane].free = false;
            this.livetimingStarts[start.lane - this.firstLane].start = start
          }
        }
      })
      this.heatService.getEventHeatInfo(this.meetingId, this.currentEvent).subscribe(data => {
        if (data)
          this.heatAmount = data.amount
      })
    }
  }

  fetchEvent() {
    if (this.meeting && this.meeting.meet_id) {
      this.eventService.getCachedEventByMeetingAndNumberForLivetiming(this.meeting.meet_id, this.currentEvent).subscribe(data => {
        if (data) {
          this.event = data;
          console.log(this.event)
        }
      })
    }
  }

  onChangeHeat(ev: ChangeHeatEvent) {
    if (ev.name == "heat") {
      this.currentHeat += (ev.next ? 1 : -1);
    } else {
      this.currentHeat = 1; // if event change, always go to heat 1
    }

    if (this.currentHeat <= 0) {
      this.prevEvent()
      if (this.meetingId) {
        this.heatService.getEventHeatInfo(this.meetingId, this.currentEvent).subscribe(data => {
          if (data)
            this.currentHeat = data.amount;
          this.fetchData()
        })
        return;
      }
    } else if (this.currentHeat > this.heatAmount) {
      this.nextEvent()
      this.currentHeat = 1;
    }

    if (ev.name == "event") {
      if (ev.next) {
        this.nextEvent()
      } else {
        this.prevEvent()
      }
    }
    this.fetchData();
  }

  nextEvent() {
    if (this.event.next_event.number != undefined)
      this.currentEvent = this.event.next_event.number;
  }

  prevEvent() {
    if (this.event.prev_event.number != undefined)
      this.currentEvent = this.event.prev_event.number;
  }


}
