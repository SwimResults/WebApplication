import {Component} from '@angular/core';
import {WidgetNOSmallComponent} from "../widget-n-o-small.component";
import {StartService} from "../../../../../core/service/api";
import {RouteService} from "../../../../../core/service/route.service";
import {SpinnerComponent} from '../../../../elements/spinner/spinner.component';
import {WidgetTitleComponent} from '../../../widget-title/widget-title.component';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-widget-n-o-starts-small',
    templateUrl: './../widget-n-o-small.component.html',
    styleUrls: ['./widget-n-o-starts-small.component.scss', './../widget-n-o-small.component.scss'],
    imports: [SpinnerComponent, WidgetTitleComponent, TranslateModule]
})
export class WidgetNOStartsSmallComponent extends WidgetNOSmallComponent {
    constructor(
        private startService: StartService,
        protected override routeService: RouteService
    ) {
        super(routeService)
        this.countName = "Starts";
    }

    override fetchNumber() {
        if (!this.meetingId) return;
        this.fetching.fetching = true;
        this.startService.getStartsAmountByMeeting(this.meetingId).subscribe({
            next: data => {
                this.n = data;
                this.fetching.fetching = false;
            },
            error: _ => this.fetching.fetching = false
        })
    }
}
