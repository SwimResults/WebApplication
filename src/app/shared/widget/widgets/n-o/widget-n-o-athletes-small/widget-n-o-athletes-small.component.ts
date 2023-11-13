import { Component } from '@angular/core';
import {WidgetNOSmallComponent} from "../widget-n-o-small.component";
import {RouteService} from "../../../../../core/service/route.service";
import {AthleteService} from "../../../../../core/service/api";

@Component({
  selector: 'sr-widget-n-o-athletes-small',
    templateUrl: './../widget-n-o-small.component.html',
  styleUrls: ['./widget-n-o-athletes-small.component.scss', './../widget-n-o-small.component.scss']
})
export class WidgetNOAthletesSmallComponent extends WidgetNOSmallComponent {
    constructor(
        private athleteService: AthleteService,
        protected override routeService: RouteService
    ) {
        super(routeService)
        this.countName = "Athletes";
    }

    override fetchNumber() {
        if (!this.meetingId) return;
        this.fetching.fetching = true;
        this.athleteService.getAthletesAmountByMeeting(this.meetingId).subscribe(data => {
            this.n = data;
            this.fetching.fetching = false;
        })
    }
}
