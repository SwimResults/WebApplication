import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Start, StartImpl} from "../../../../core/model/start/start.model";
import {StartListTileConfig} from "../../../../core/model/start/start-list-tile-config.model";
import {ActivatedRoute} from "@angular/router";
import {StartService, EventService, FileService} from "../../../../core/service/api";
import {RouteService} from "../../../../core/service/route.service";
import {MeetingEvent} from "../../../../core/model/meeting/meeting-event.model";
import {HeatImpl} from "../../../../core/model/start/heat.model";
import {MeetingImpl} from "../../../../core/model/meeting/meeting.model";
import {FetchingModel} from "../../../../core/model/common/fetching.model";
import {StartResults} from "../../../../core/model/start/start-results.model";

@Component({
  selector: 'sr-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.scss']
})
export class EventViewComponent implements OnInit, OnDestroy {
  meeting?: MeetingImpl;
  meetingId?: string;
  meetingSubscription: Subscription;
  meetingIdSubscription: Subscription;
  eventNumber: number = 1;

  event: MeetingEvent = {} as MeetingEvent;

  fileButtonData = {event_number: this.eventNumber};

  starts: Start[] = [];
  heats: Map<number, StartImpl[]> = new Map<number, StartImpl[]>();
  heatData: Map<number, HeatImpl> = new Map<number, HeatImpl>();
  config: StartListTileConfig = {
    showAthlete: true,
    showIcon: true,
    laneAsIcon: true,
    flatStyle: true,
    rankStylesIcon: false,
    showRegistrationTime: true,
    showResults: true,
    showResultTime: true,
    showReactionTime: true,
    showLapTimes: true
  } as StartListTileConfig;

  resultStarts: StartResults[] = [];

  listMode: string = "lanes";

  fetchingStarts: FetchingModel = {fetching: false};

  constructor(
    private activatedRoute: ActivatedRoute,
    private startService: StartService,
    private routeService: RouteService,
    private eventService: EventService,
    private fileService: FileService
  ) {
    this.meetingSubscription = this.routeService.currentMeeting.subscribe(data => {
      this.meeting = new MeetingImpl(data.meeting);
      console.log("fetched meeting:")
      console.log(this.meeting)
    })
    this.meetingIdSubscription = this.routeService.currentMeetingId.subscribe(data => {
      this.meetingId = data;
    })
  }

  ngOnDestroy() {
    this.meetingSubscription.unsubscribe();
    this.meetingIdSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(s => {
      this.eventNumber = s["event_number"];
      this.fileButtonData.event_number = this.eventNumber;
      this.fetchStarts();
      this.fetchEvent();
    });
  }

  changeListMode(t: string) {
    this.listMode = t

    if (this.listMode == "lanes") {
      this.config.laneAsIcon = true
        this.config.rankStylesIcon = false;
    }
    if (this.listMode == "finish") {
      this.config.laneAsIcon = false
        this.config.rankStylesIcon = false;
    }

    if (this.listMode == "results") {
        this.config.laneAsIcon = false;
        this.config.rankStylesIcon = true;
        this.fetchResultStarts();
        return;
    }

    this.fetchStarts()
  }

  fetchStarts() {
    if (this.meetingId) {
      this.fetchingStarts.fetching = true;
      this.startService.getStartsByMeetingAndEvent(this.meetingId, this.eventNumber).subscribe(data => {
        if (!data) {
          this.fetchingStarts.fetching = false;
          return;
        }
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

          if (this.listMode == "finish") {
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

          this.fetchingStarts.fetching = false;
        }

      })
    }
  }

    fetchResultStarts() {
        if (this.meetingId) {
            this.fetchingStarts.fetching = true;
            this.startService.getStartsByMeetingAndEventAsResults(this.meetingId, this.eventNumber).subscribe({
                next: (data => {
                    this.resultStarts = data;
                    this.fetchingStarts.fetching = false;
                }),
                error: (_ => {
                    this.fetchingStarts.fetching = false;
                    })
                }
            );
        }
    }

    fetchEvent() {
        if (this.meetingId && this.eventNumber) {
            this.eventService.getCachedEventByMeetingAndNumber(this.meetingId, this.eventNumber).subscribe(data => {
                this.event = data;
                if (this.meetingId)
                    this.eventService.getEventByMeetingAndNumber(this.meetingId, this.eventNumber).subscribe(event => {
                        this.event = event;
                    })
            })

        }
    }

  getUrlFromMask(mask: string) {
    return this.fileService.getUrlFromMask(mask, this.eventNumber);
  }
}
