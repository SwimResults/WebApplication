import {Component, OnDestroy, OnInit} from '@angular/core';
import {DashboardService} from "../../../../core/service/api/user/dashboard.service";
import {Dashboard} from "../../../../core/model/user/dashboard.model";
import {AuthService} from "../../../../core/service/auth.service";
import {Subscription} from "rxjs";
import {MeetingImpl} from "../../../../core/model/meeting/meeting.model";
import {RouteService} from "../../../../core/service/route.service";
import {User} from "../../../../core/model/user/user.model";
import {OAuthService} from "angular-oauth2-oidc";

@Component({
    selector: 'sr-dashboard-view',
    templateUrl: './dashboard-view.component.html',
    styleUrls: ['./dashboard-view.component.scss']
})
export class DashboardViewComponent implements OnInit, OnDestroy {

    kcUser: any;

    dashboard: Dashboard = {} as Dashboard;
    isAuthed: boolean | null = null;

    isAuthedSubscription: Subscription;


    meeting?: MeetingImpl | null;
    meetingSubscription: Subscription;

    user?: User;

    welcomeMessageParam = {username: ""}

    constructor(
        private dashboardService: DashboardService,
        private authService: AuthService,
        private routeService: RouteService,
        private oAuthService: OAuthService
    ) {
        this.isAuthedSubscription = this.authService.isAuthenticated.subscribe(data => {
            this.isAuthed = data
            this.fetchDashboard();
        })
        this.meetingSubscription = this.routeService.currentMeeting.subscribe(data => {
            this.meeting = new MeetingImpl(data.meeting);
            this.fetchDashboard();
        })
    }

    ngOnInit() {
        this.fetchDashboard();
        this.kcUser = this.oAuthService.getIdentityClaims();
        if (this.kcUser && this.kcUser["given_name"])
            this.welcomeMessageParam.username = this.kcUser["given_name"];
    }

    ngOnDestroy() {
        this.isAuthedSubscription.unsubscribe();
        this.meetingSubscription.unsubscribe();
    }

    fetchDashboard() {
        if (this.meeting === null || this.isAuthed === null) return;
        let meetingState = "";
        if (this.meeting) {
            meetingState = this.meeting.state;
        }
        this.dashboardService.getDashboard(!this.isAuthed, meetingState).subscribe(data => this.dashboard = data);
    }

}
