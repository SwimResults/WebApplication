import {Component, OnDestroy, OnInit} from '@angular/core';
import {DashboardService} from "../../../../core/service/api/user/dashboard.service";
import {Dashboard} from "../../../../core/model/user/dashboard.model";
import {AuthService} from "../../../../core/service/auth.service";
import {Subscription} from "rxjs";
import {MeetingImpl, MeetingStates} from "../../../../core/model/meeting/meeting.model";
import {RouteService} from "../../../../core/service/route.service";
import {User} from "../../../../core/model/user/user.model";
import {OAuthService} from "angular-oauth2-oidc";
import {MeetingService} from "../../../../core/service/api";

@Component({
    selector: 'sr-dashboard-view',
    templateUrl: './dashboard-view.component.html',
    styleUrls: ['./dashboard-view.component.scss'],
    standalone: false
})
export class DashboardViewComponent implements OnInit, OnDestroy {

    kcUser: any;

    dashboard: Dashboard = {} as Dashboard;
    isAuthed: boolean | null = null;

    isAuthedSubscription: Subscription;


    meeting?: MeetingImpl | null;
    meetingIdSubscription: Subscription;

    user?: User;

    welcomeMessageParam = {username: ""}

    fetchedMeeting: boolean = false;
    fetchedUser: boolean = false;

    fetchingDashboard: boolean = false;

    constructor(
        private dashboardService: DashboardService,
        private authService: AuthService,
        private routeService: RouteService,
        private oAuthService: OAuthService,
        private meetingService: MeetingService
    ) {
        this.fetchingDashboard = true;
        this.isAuthedSubscription = this.authService.isAuthenticated.subscribe({
            next: data => {
                this.isAuthed = data
                this.fetchedUser = true;
                this.fetchDashboard();
            },
            error: _ => this.fetchingDashboard = false
        })
        this.meetingIdSubscription = this.routeService.currentMeetingId.subscribe(data => {
            if (data) {
                this.meetingService.getMeetingByMeetId(data).subscribe({
                    next: meeting => {
                        this.meeting = new MeetingImpl(meeting);
                        this.fetchedMeeting = true;
                        this.fetchDashboard();
                    },
                    error: _ => this.fetchingDashboard = false
                })
            } else {
                this.fetchingDashboard = false;
            }
        })
    }

    ngOnInit() {
        this.kcUser = this.oAuthService.getIdentityClaims();
        if (this.kcUser && this.kcUser["given_name"])
            this.welcomeMessageParam.username = this.kcUser["given_name"];
    }

    ngOnDestroy() {
        this.isAuthedSubscription.unsubscribe();
        this.meetingIdSubscription.unsubscribe();
    }

    fetchDashboard() {
        this.fetchingDashboard = true;
        if (!this.fetchedMeeting || !this.fetchedUser) {
            this.fetchingDashboard = false;
            return;
        }
        let meetingState = "";
        if (this.meeting) {
            if (this.meeting.hasState(MeetingStates.HIDDEN)) {
                this.fetchingDashboard = false;
                return;
            }
            meetingState = this.meeting.state;
        }
        this.dashboardService.getDashboard(!this.isAuthed, meetingState).subscribe({
            next: data => {
                this.dashboard = data;
                this.fetchingDashboard = false;
            }, error: _ => this.fetchingDashboard = false
        });
    }

}
