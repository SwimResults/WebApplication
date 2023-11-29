import { Component } from '@angular/core';
import {WidgetNOSmallComponent} from "../widget-n-o-small.component";
import {HeatService} from "../../../../../core/service/api";
import {RouteService} from "../../../../../core/service/route.service";

@Component({
  selector: 'sr-widget-n-o-heats-small',
    templateUrl: './../widget-n-o-small.component.html',
  styleUrls: ['./widget-n-o-heats-small.component.scss', './../widget-n-o-small.component.scss']
})
export class WidgetNOHeatsSmallComponent extends WidgetNOSmallComponent {
    constructor(
        private heatService: HeatService,
        protected override routeService: RouteService
    ) {
        super(routeService)
        this.countName = "Heats";
    }

    override fetchNumber() {
        if (!this.meetingId) return;
        this.fetching.fetching = true;
        this.heatService.getHeatsAmountByMeeting(this.meetingId).subscribe({
            next: data => {
                this.n = data;
                this.fetching.fetching = false;
            },
            error: _ => this.fetching.fetching = false
        })
    }
}
