import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Start} from "../../../../core/model/start/start.model";
import {StartService} from "../../../../core/service/api";
import {Subscription} from "rxjs";
import {RouteService} from "../../../../core/service/route.service";
import {StartListTileConfig} from "../../../../core/model/start/start-list-tile-config.model";

@Component({
  selector: 'sr-page-event',
  templateUrl: './page-event.component.html',
  styleUrls: ['./page-event.component.scss']
})
export class PageEventComponent implements OnInit, OnDestroy {
  meetingId: string | undefined;
  private meetingIdSubscription: Subscription;
  eventNumber: string = "";

  starts: Start[] = [];
  heats: Map<number, Start[]> = new Map<number, Start[]>();
  config: StartListTileConfig = {showAthlete: true, laneAsIcon: true} as StartListTileConfig;

  constructor(
    private activatedRoute: ActivatedRoute,
    private startService: StartService,
    private routeService: RouteService
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
    });
  }

  fetchStarts() {
    if (this.meetingId) {
      this.startService.getStartsByMeetingAndEvent(this.meetingId, this.eventNumber).subscribe(data => {
        this.starts = data;

        this.heats.clear();
        for (let start of this.starts) {
          if (!this.heats.has(start.heat_number)) {
            this.heats.set(start.heat_number, [])
          }
          this.heats.get(start.heat_number)?.push(start);
        }

        this.heats = new Map([...this.heats.entries()].sort());
      })
    }
  }
}
