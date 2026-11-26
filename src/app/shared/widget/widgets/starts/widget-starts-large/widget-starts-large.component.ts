import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {Subscription} from "rxjs";
import {RouteService} from "../../../../../core/service/route.service";
import {WidgetTitleComponent} from '../../../widget-title/widget-title.component';
import {WidgetLoginRequiredComponent} from '../../../widget-login-required/widget-login-required.component';
import {WidgetInfoTextComponent} from '../../../widget-info-text/widget-info-text.component';
import {BtnComponent} from '../../../../elements/buttons/btn/btn.component';
import {RouterLink} from '@angular/router';
import {StartListComponent} from '../../../../../content/starts';
import {TranslateModule} from '@ngx-translate/core';
import {User, StartService, UserService, Start, StartListTileConfig, HeatImpl} from '@swimresults/angular';

@Component({
    selector: 'sr-widget-starts-large',
    templateUrl: './widget-starts-large.component.html',
    styleUrls: ['./widget-starts-large.component.scss'],
    imports: [WidgetTitleComponent, WidgetLoginRequiredComponent, WidgetInfoTextComponent, BtnComponent, RouterLink, StartListComponent, TranslateModule]
})
export class WidgetStartsLargeComponent implements OnInit, OnDestroy {
    private userService = inject(UserService);
    private startService = inject(StartService);
    private routeService = inject(RouteService);

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

    constructor() {
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
