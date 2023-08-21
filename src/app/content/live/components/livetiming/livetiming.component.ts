import {Component, OnDestroy, OnInit} from '@angular/core';
import {StartService} from "../../../../core/service/api";
import {Start, StartImpl} from "../../../../core/model/start/start.model";
import {EventService} from "../../../../core/service/api/meeting/event.service";
import {MeetingEventLivetiming} from "../../../../core/model/meeting/meeting-event-livetiming.model";
import {HeatService} from "../../../../core/service/api/start/heat.service";
import {MeetingImpl} from "../../../../core/model/meeting/meeting.model";
import {Subscription} from "rxjs";
import {RouteService} from "../../../../core/service/route.service";
import {StartListTileConfig} from "../../../../core/model/start/start-list-tile-config.model";

export interface ChangeHeatEvent {
  name: "event" | "heat" | "all";
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

  currentEvent: number = 1;
  currentHeat: number = 1;

  starts: Start[] = [];
  event: MeetingEventLivetiming = {} as MeetingEventLivetiming;
  heatAmount: number = 1;
  heatFinished: boolean = false;

  lanes: number = 1;
  firstLane: number = 1;

  config: StartListTileConfig = {
    showAthlete: true,
    laneAsIcon: true,
    flatStyle: true,
    allLanes: true,
    showResults: true,
    showRegistrationTime: !this.heatFinished,
    showResultTime: this.heatFinished
  } as StartListTileConfig;

  constructor(
    private routeService: RouteService,
    private startService: StartService,
    private heatService: HeatService,
    private eventService: EventService
  ) {

    // get heat and event from session storage
    let heat = window.sessionStorage.getItem("livetiming_heat");
    let event = window.sessionStorage.getItem("livetiming_event");
    if (heat) {
      this.currentHeat = Number(heat);
    }
    if (event) {
      this.currentEvent = Number(event);
    }

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
          this.heatFinished = false;
          this.starts = [];
          let st: StartImpl[] = []
          let ls: StartImpl[] = [];

          for (let start of data) {
            let s = new StartImpl(start)
            if (!this.heatFinished && s.hasResult()) {
              this.heatFinished = true;
            }
            st.push(s);
          }

          if (st.length > this.lanes) {
            this.lanes = st.length;
          }
          if (st[0].lane < this.firstLane) {
            this.firstLane = st[0].lane;
          }

          // create all lanes with empty data
          for (let i = this.firstLane; i < this.lanes + this.firstLane; i++) {
            ls.push({lane: i, emptyLane: true} as StartImpl)
          }

          for (let start of st) {
            ls[start.lane - this.firstLane] = start
            ls[start.lane - this.firstLane].emptyLane = false;
          }

          if (this.heatFinished) {
            ls.sort((a,b) => (a.emptyLane ? 1 : (b.emptyLane ? -1 : (a.getResultMilliseconds() <= 0 ? 1 : (b.getResultMilliseconds() <= 0 ? -1 : a.getResultMilliseconds() - b.getResultMilliseconds())))))
            let j = 1;
            for (let start of ls) {
              start.rank = j++;
            }
          }

          this.config = {
            showAthlete: true,
            laneAsIcon: !this.heatFinished,
            flatStyle: true,
            allLanes: !this.heatFinished,
            showResults: true,
            showRegistrationTime: !this.heatFinished,
            showResultTime: this.heatFinished
          } as StartListTileConfig;
          this.starts = ls
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
          if (!this.event || !this.event.event || !this.event.event.number) {
            if (this.event.next_event && this.event.next_event.number) {
              this.currentEvent = this.event.next_event.number
              this.fetchData()
            } else if (this.event.prev_event && this.event.prev_event.number) {
              this.currentEvent = this.event.prev_event.number
              this.fetchData()
            }
          }
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
          this.storeCurrentHeat();
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

    if (ev.name == "all") {
      if (ev.next) {
        this.currentEvent = 100000;
      } else {
        this.currentEvent = 1;
      }
      this.currentHeat = 1;
    }
    this.storeCurrentHeat();
    this.fetchData();
  }

  storeCurrentHeat() {
    window.sessionStorage.setItem("livetiming_heat", "" + this.currentHeat);
    window.sessionStorage.setItem("livetiming_event", "" + this.currentEvent);
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
