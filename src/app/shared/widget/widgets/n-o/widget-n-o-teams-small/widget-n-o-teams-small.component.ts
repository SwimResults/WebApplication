import { Component } from '@angular/core';
import {WidgetNOSmallComponent} from "../widget-n-o-small.component";
import {RouteService} from "../../../../../core/service/route.service";
import {TeamService} from "../../../../../core/service/api";

@Component({
  selector: 'sr-widget-n-o-teams-small',
  templateUrl: './../widget-n-o-small.component.html',
  styleUrls: ['./widget-n-o-teams-small.component.scss', './../widget-n-o-small.component.scss']
})
export class WidgetNOTeamsSmallComponent extends WidgetNOSmallComponent {
    constructor(
        private teamService: TeamService,
        protected override routeService: RouteService
    ) {
        super(routeService);
        this.countName = "Teams";
    }

    override fetchNumber() {
        if (!this.meetingId) return;
        this.fetching.fetching = true;
        this.teamService.getTeamsAmountByMeeting(this.meetingId).subscribe(data => {
            this.n = data;
            this.fetching.fetching = false;
        })
    }
}
