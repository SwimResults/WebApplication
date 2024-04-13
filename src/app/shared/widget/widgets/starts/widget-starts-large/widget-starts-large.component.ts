import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from "../../../../../core/model/user/user.model";
import {StartService, UserService} from "../../../../../core/service/api";
import {Start} from "../../../../../core/model/start/start.model";
import {StartListTileConfig} from "../../../../../core/model/start/start-list-tile-config.model";
import {HeatImpl} from "../../../../../core/model/start/heat.model";
import {Subscription} from "rxjs";
import {RouteService} from "../../../../../core/service/route.service";

@Component({
  selector: 'sr-widget-starts-large',
  templateUrl: './widget-starts-large.component.html',
  styleUrls: ['./widget-starts-large.component.scss']
})
export class WidgetStartsLargeComponent implements OnInit, OnDestroy {
    meetingId?: string;
    meetingIdSubscription: Subscription;

    user?: User;
    starts: Start[] = [];

    config: StartListTileConfig = {
        showEvent: true,
        showStyle: true,
        showHeat: true,
        showLane: true,
        showTimes: true,
        flatStyle: true,
        widgetSize: true,
    } as StartListTileConfig

    constructor(
        private userService: UserService,
        private startService: StartService,
        private routeService: RouteService
    ) {
        this.meetingIdSubscription = this.routeService.currentMeetingId.subscribe(data => {
            this.meetingId = data;
        })
    }

    ngOnInit() {
        this.userService.getUser().subscribe(data => {
            this.user = data;
            this.fetchStarts();
        });
    }

    ngOnDestroy() {
        this.meetingIdSubscription.unsubscribe();
    }

    fetchStarts() {
        if (this.user && this.user.own_athlete_id && this.meetingId)
            this.startService.getStartsByMeetingAndAthlete(this.meetingId, this.user.own_athlete_id).subscribe(data => {
                for (const start of data) {
                    if (this.starts.length >= 4) break;
                    if (start.certified) continue;
                    const h = new HeatImpl(start.heat);
                    if (h.getFinishedAt().getMilliseconds() > 0) continue;
                    this.starts.push(start);
                }
            })
    }
}
