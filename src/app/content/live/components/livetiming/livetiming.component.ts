import {Component, OnInit} from '@angular/core';
import {StartService} from "../../../../core/service/api";
import {StartImpl} from "../../../../core/model/start/start.model";
import {EventService} from "../../../../core/service/api/meeting/event.service";
import {MeetingEventLivetiming} from "../../../../core/model/meeting/meeting-event-livetiming.model";
import {HeatService} from "../../../../core/service/api/start/heat.service";

export interface ChangeHeatEvent {
  name: "event" | "heat";
  next: boolean;
}

@Component({
  selector: 'sr-livetiming',
  templateUrl: './livetiming.component.html',
  styleUrls: ['./livetiming.component.scss']
})
export class LivetimingComponent implements OnInit {

  currentEvent: number = 101;
  currentHeat: number = 1;

  starts: StartImpl[] = [];
  event: MeetingEventLivetiming = {} as MeetingEventLivetiming;
  heatAmount: number = 1;

  constructor(
    private startService: StartService,
    private heatService: HeatService,
    private eventService: EventService
  ) {
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.fetchHeat();
    this.fetchEvent();
  }

  fetchHeat() {
    this.startService.getStartsByMeetingAndEventAndHeat("ESS23F", this.currentEvent, this.currentHeat).subscribe(data => {
      if (data) {
        this.starts = [];
        for (let start of data) {
          this.starts.push(new StartImpl(start));
        }
      }
    })
    this.heatService.getEventHeatInfo("ESS23F", this.currentEvent).subscribe(data => {
      if (data)
        this.heatAmount = data.amount
    })
  }

  fetchEvent() {
    this.eventService.getCachedEventByMeetingAndNumberForLivetiming("ESS23F", this.currentEvent).subscribe(data => {
      if (data) {
        this.event = data;
        console.log(this.event)
      }
    })
  }

  onChangeHeat(ev: ChangeHeatEvent) {
    if (ev.name == "heat") {
      this.currentHeat += (ev.next ? 1 : -1);
    } else {
      this.currentHeat = 1; // if event change, always go to heat 1
    }

    if (this.currentHeat <= 0) {
      this.prevEvent()
      this.heatService.getEventHeatInfo("ESS23F", this.currentEvent).subscribe(data => {
        if (data)
          this.currentHeat = data.amount;
        this.fetchData()
      })
      return;
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
