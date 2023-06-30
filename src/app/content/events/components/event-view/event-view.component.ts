import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Start, StartImpl} from "../../../../core/model/start/start.model";
import {StartListTileConfig} from "../../../../core/model/start/start-list-tile-config.model";
import {ActivatedRoute} from "@angular/router";
import {StartService} from "../../../../core/service/api";
import {RouteService} from "../../../../core/service/route.service";
import {EventService} from "../../../../core/service/api/meeting/event.service";
import {MeetingEvent} from "../../../../core/model/meeting/meeting-event.model";
import {HeatImpl} from "../../../../core/model/start/heat.model";

@Component({
  selector: 'sr-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.scss']
})
export class EventViewComponent implements OnInit, OnDestroy {
  meetingId: string | undefined;
  private meetingIdSubscription: Subscription;
  eventNumber: string = "";

  event: MeetingEvent = {} as MeetingEvent;

  starts: Start[] = [];
  heats: Map<number, StartImpl[]> = new Map<number, StartImpl[]>();
  heatData: Map<number, HeatImpl> = new Map<number, HeatImpl>();
  config: StartListTileConfig = {showAthlete: true, laneAsIcon: true, flatStyle: true} as StartListTileConfig;

  listMode: string = "lanes";

  constructor(
    private activatedRoute: ActivatedRoute,
    private startService: StartService,
    private routeService: RouteService,
    private eventService: EventService
  ) {
    this.meetingIdSubscription = this.routeService.currentMeetingId.subscribe(data => {
      this.meetingId = data;
    })
  }

  ngOnDestroy() {
    this.meetingIdSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(s => {
      this.eventNumber = s["event_number"];
      this.fetchStarts();
      this.fetchEvent();
    });
  }

  changeListMode(t: string) {
    this.listMode = t

    if (this.listMode == "lanes") {
      this.config.laneAsIcon = true
    }
    if (this.listMode == "results") {
      this.config.laneAsIcon = false
    }

    this.fetchStarts()
  }

  fetchStarts() {
    if (this.meetingId) {
      this.startService.getStartsByMeetingAndEvent(this.meetingId, this.eventNumber).subscribe(data => {
        this.starts = data;

        this.heats.clear();

        if (this.starts && this.starts.length > 0) {

          for (let start of this.starts) {
            if (start.heat_number <= 0) continue;
            if (!this.heats.has(start.heat_number)) {
              this.heats.set(start.heat_number, [])
              this.heatData.set(start.heat_number, new HeatImpl(start.heat));
            }
            this.heats.get(start.heat_number)?.push(new StartImpl(start));
          }

          if (this.listMode == "lanes") {
            for (let heat of this.heats.keys()) {
              this.heats.get(heat)?.sort((a,b) => a.lane - b.lane)
            }
          }

          if (this.listMode == "results") {
            for (let heat of this.heats.keys()) {
              this.heats.get(heat)?.sort((a,b) => a.disqualification.type ? 1 : (b.disqualification.type ? -1 : a.getResultMilliseconds() - b.getResultMilliseconds()))
              let starts = this.heats.get(heat);
              if (starts != undefined) {
                let j = 1
                for (let i = 0; i < starts.length; i++) {
                  if (starts[i].disqualification.type) {
                    starts[i].rank = 0
                    continue
                  }
                  starts[i].rank = j++;
                }
              }
            }
          }

          // sort heats map by heat number
          this.heats = new Map([...this.heats.entries()].sort((a,b) => a[0] - b[0]));

        }

      })
    }
  }

  fetchEvent() {
    if (this.meetingId && this.eventNumber) {
      this.eventService.getCachedEventByMeetingAndNumber(this.meetingId, this.eventNumber).subscribe(data => {
        this.event = data;
      })
    }
  }
}
