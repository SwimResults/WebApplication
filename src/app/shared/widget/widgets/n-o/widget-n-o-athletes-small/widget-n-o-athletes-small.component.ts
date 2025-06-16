import {Component} from '@angular/core';
import {WidgetNOSmallComponent} from "../widget-n-o-small.component";
import {RouteService} from "../../../../../core/service/route.service";
import {AthleteService} from "../../../../../core/service/api";
import {SpinnerComponent} from '../../../../elements/spinner/spinner.component';
import {WidgetTitleComponent} from '../../../widget-title/widget-title.component';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-widget-n-o-athletes-small',
    templateUrl: './../widget-n-o-small.component.html',
    styleUrls: ['./widget-n-o-athletes-small.component.scss', './../widget-n-o-small.component.scss'],
    imports: [SpinnerComponent, WidgetTitleComponent, TranslateModule]
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
        this.athleteService.getAthletesAmountByMeeting(this.meetingId).subscribe({
            next: data => {
                this.n = data;
                this.fetching.fetching = false;
            },
            error: _ => this.fetching.fetching = false
        })
    }
}
