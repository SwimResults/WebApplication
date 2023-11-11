import {Component, OnDestroy, OnInit} from '@angular/core';
import {DashboardService} from "../../../../core/service/api/user/dashboard.service";
import {Dashboard} from "../../../../core/model/user/dashboard.model";
import {AuthService} from "../../../../core/service/auth.service";
import {Subscription} from "rxjs";
import {MeetingImpl} from "../../../../core/model/meeting/meeting.model";
import {RouteService} from "../../../../core/service/route.service";

@Component({
    selector: 'sr-dashboard-view',
    templateUrl: './dashboard-view.component.html',
    styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit, OnDestroy {

    dashboard: Dashboard = {} as Dashboard;
    isAuthed: boolean = false;

    isAuthedSubscription: Subscription;


    meeting?: MeetingImpl;
    meetingSubscription: Subscription;

    constructor(
        private dashboardService: DashboardService,
        private authService: AuthService,
        private routeService: RouteService
    ) {
        this.isAuthedSubscription = this.authService.isAuthenticated.subscribe(data => {
            this.isAuthed = data
            this.fetchDashboard();
        })
        this.meetingSubscription = this.routeService.currentMeeting.subscribe(data => {
            this.meeting = new MeetingImpl(data.meeting);
        })
    }

    ngOnInit() {
        this.fetchDashboard();
    }

    ngOnDestroy() {
        this.isAuthedSubscription.unsubscribe();
        this.meetingSubscription.unsubscribe();
    }

    fetchDashboard() {
        let meetingState = "";
        if (this.meeting) {
            meetingState = this.meeting.state;
        }
        this.dashboardService.getDashboard(!this.isAuthed, meetingState).subscribe(data => this.dashboard = data);
    }

}
