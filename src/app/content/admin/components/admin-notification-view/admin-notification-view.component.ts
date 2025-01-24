import {Component, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {RouteService} from "../../../../core/service/route.service";

@Component({
  selector: 'sr-admin-notification-view',
  templateUrl: './admin-notification-view.component.html',
  styleUrl: './admin-notification-view.component.scss'
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
