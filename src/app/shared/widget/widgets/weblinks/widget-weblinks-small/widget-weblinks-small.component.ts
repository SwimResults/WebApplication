import {Component, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {RouteService} from "../../../../../core/service/route.service";
import {MeetingImpl} from "../../../../../core/model/meeting/meeting.model";
import {WidgetTitleComponent} from '../../../widget-title/widget-title.component';
import {MatIcon} from '@angular/material/icon';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-widget-weblinks-small',
    templateUrl: './widget-weblinks-small.component.html',
    styleUrl: './widget-weblinks-small.component.scss',
    imports: [WidgetTitleComponent, MatIcon, TranslateModule]
})
export class WidgetWeblinksSmallComponent implements OnDestroy {
    meeting?: MeetingImpl;
    meetingSubscription: Subscription;

    constructor(
        private routeService: RouteService
    ) {
        this.meetingSubscription = this.routeService.currentMeeting.subscribe(data => {
            this.meeting = new MeetingImpl(data.meeting);
        })
    }

    ngOnDestroy() {
        this.meetingSubscription.unsubscribe();
    }
}
