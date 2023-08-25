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
import {HeatImpl} from "../../../../core/model/start/heat.model";

export interface ChangeHeatEvent {
  name: "event" | "heat" | "all" | "nothing";
  next: boolean;
}

export interface LiveSettingsData {
  isLive: boolean;
}

@Component({
  selector: 'sr-livetiming',
  templateUrl: './livetiming.component.html',
  styleUrls: ['./livetiming.component.scss']
})
export class LivetimingComponent implements OnInit, OnDestroy {

  liveTimingUpdateInterval: number = 3000;

  meeting?: MeetingImpl;
  meetingId?: string;
  meetingSubscription: Subscription;
  meetingIdSubscription: Subscription;

  currentEvent: number = 1;
  currentHeat: number = 1;

  starts: Start[] = [];
  heat?: HeatImpl;
  event: MeetingEventLivetiming = {} as MeetingEventLivetiming;
  heatAmount: number = 1;
  heatFinished: boolean = false;

  liveSettingsData: LiveSettingsData = {isLive: true} as LiveSettingsData;

  lanes: number = 1;
  firstLane: number = 1;

  config: StartListTileConfig = {
    showAthlete: true,
    laneAsIcon: true,
    flatStyle: true,
    allLanes: true,
    showResults: true,
    showRegistrationTime: !this.heatFinished,
    showResultTime: this.heatFinished,
    showMostSignificantTime: this.liveSettingsData.isLive
  } as StartListTileConfig;
  private interval: any;

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

    let isLive = window.sessionStorage.getItem("livetiming_live") == "1";
    console.log(isLive);
    this.liveSettingsData.isLive = isLive;

    this.meetingSubscription = this.routeService.currentEvent.subscribe(data => {
      this.meeting = new MeetingImpl(data.meeting);
      if (this.meeting) {
        if (this.meeting.location && this.meeting.location.lanes && this.meeting.location.first_lane) {
          this.lanes = this.meeting.location.lanes;
          this.firstLane = this.meeting.location.first_lane
        }
        this.fetchData();
      }
    })
    this.meetingIdSubscription = this.routeService.currentMeetingId.subscribe(data => {
      this.meetingId = data;
    })
  }

  startLiveCycle() {
    if (this.liveSettingsData.isLive) {
      this.interval = setInterval(() => {
        console.log("LIVE CYCLE RUNNING: interval: " + this.liveTimingUpdateInterval + " rnd: " + Math.random());
        this.fetchData();
      }, this.liveTimingUpdateInterval);
    }
  }

  stopLiveCycle() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  updateLiveCycle() {
    if (this.liveSettingsData.isLive) {
      this.startLiveCycle()
    } else {
      this.stopLiveCycle()
    }
  }

  ngOnInit() {
    //this.fetchData();
    this.updateLiveCycle()
  }

  ngOnDestroy() {
    this.meetingSubscription.unsubscribe();
    this.meetingIdSubscription.unsubscribe();
    this.stopLiveCycle()
  }

  fetchData() {
    this.fetchHeat();
    this.fetchEvent();
  }

  fetchHeat() {
    if (this.meetingId) {
      if (this.liveSettingsData.isLive) {
        this.startService.getCurrentStarts(this.meetingId).subscribe(data => {
          this.processStarts(data)
        })
      } else {
        this.startService.getStartsByMeetingAndEventAndHeat(this.meetingId, this.currentEvent, this.currentHeat).subscribe(data => {
          this.processStarts(data);
        })
        this.fetchHeatAmount();
      }
    }
  }

  fetchHeatAmount() {
    if (this.meetingId)
      this.heatService.getEventHeatInfo(this.meetingId, this.currentEvent).subscribe(data => {
        if (data && data.amount)
          this.heatAmount = data.amount
      })
  }

  processStarts(starts: Start[]) {
      this.heatFinished = false;
      this.starts = [];
      let st: StartImpl[] = []
      let ls: StartImpl[] = [];

      for (let start of starts) {
        let s = new StartImpl(start)
        if (!this.heatFinished && s.hasResult()) {
          this.heatFinished = true;
        }
        st.push(s);

        if (this.liveSettingsData.isLive) {
          this.currentEvent = s.event;
          this.currentHeat = s.heat_number;
        }
      }

      if (st.length > 0) {
        this.heat = st[0].heat;
      }

      if (this.liveSettingsData.isLive) { // in live mode, set to finished when finished_at is set
        console.log(st[0].heat.getFinishedAt())
        this.heatFinished = (st.length > 0 && st[0].heat.getFinishedAtTime() != "0:00");
      }

      if (this.liveSettingsData.isLive) {
        this.fetchEvent();
        this.fetchHeatAmount();
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
        showResultTime: this.heatFinished,
        showMostSignificantTime: this.liveSettingsData.isLive
      } as StartListTileConfig;
      this.starts = ls
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
    if (ev.name == "nothing") {
      this.storeCurrentHeat();
      this.updateLiveCycle();
      this.fetchData();
      return;
    } else {
      this.liveSettingsData.isLive = false;
      this.stopLiveCycle()
    }
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
    window.sessionStorage.setItem("livetiming_live", this.liveSettingsData.isLive ? "1" : "0");
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
