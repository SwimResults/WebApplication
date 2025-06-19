import { Component, inject } from '@angular/core';
import {WidgetNOSmallComponent} from "../widget-n-o-small.component";
import {RouteService} from "../../../../../core/service/route.service";
import {TeamService} from "../../../../../core/service/api";
import {SpinnerComponent} from '../../../../elements/spinner/spinner.component';
import {WidgetTitleComponent} from '../../../widget-title/widget-title.component';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-widget-n-o-teams-small',
    templateUrl: './../widget-n-o-small.component.html',
    styleUrls: ['./widget-n-o-teams-small.component.scss', './../widget-n-o-small.component.scss'],
    imports: [SpinnerComponent, WidgetTitleComponent, TranslateModule]
})
export class WidgetNOTeamsSmallComponent extends WidgetNOSmallComponent {
    private teamService = inject(TeamService);
    protected override routeService: RouteService;

    constructor() {
        const routeService = inject(RouteService);

        super(routeService);
        this.routeService = routeService;

        this.countName = "Teams";
    }

    override fetchNumber() {
        if (!this.meetingId) return;
        this.fetching.fetching = true;
        this.teamService.getTeamsAmountByMeeting(this.meetingId).subscribe({
            next: data => {
                this.n = data;
                this.fetching.fetching = false;
            },
            error: _ => this.fetching.fetching = false
        })
    }
}
