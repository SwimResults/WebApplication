import {Component, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {RouteService} from "../../../../core/service/route.service";
import {AdminNotificationSenderComponent} from '../admin-notification-sender/admin-notification-sender.component';

@Component({
    selector: 'sr-admin-notification-view',
    templateUrl: './admin-notification-view.component.html',
    styleUrl: './admin-notification-view.component.scss',
    imports: [AdminNotificationSenderComponent]
})
export class AdminNotificationViewComponent implements OnDestroy {
    meetingId?: string;
    meetingIdSubscription: Subscription;

    constructor(
        private routeService: RouteService
    ) {
        this.meetingIdSubscription = this.routeService.currentMeetingId.subscribe(data => {
            this.meetingId = data;
        })
    }

    ngOnDestroy() {
        this.meetingIdSubscription.unsubscribe();
    }
}
