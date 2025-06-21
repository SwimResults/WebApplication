import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Athlete, Team} from "../../../../core/model";
import {IListTile} from "../../../../core/model/list/list-tile.model";
import {AthleteService, TeamService} from "../../../../core/service/api";
import {RefreshListRequest} from "../../../../core/model/list/refresh-list-request.model";
import {TeamAthleteListTile} from "../../../../core/model/list/team-athlete-list-tile.model";
import {Subscription} from "rxjs";
import {RouteService} from "../../../../core/service/route.service";
import {FetchingModel} from "../../../../core/model/common/fetching.model";
import {SpinnerComponent} from '../../../../shared/elements/spinner/spinner.component';
import {TeamProfileIntroComponent} from '../../components';
import {PanelComponent} from '../../../../shared/elements/panel/panel.component';
import {MatIcon} from '@angular/material/icon';
import {BtnComponent} from '../../../../shared/elements/buttons/btn/btn.component';
import {ListViewComponent} from '../../../../shared/elements/list/list-view/list-view.component';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-page-team',
    templateUrl: './page-team.component.html',
    styleUrls: ['./page-team.component.scss'],
    imports: [
        SpinnerComponent,
        TeamProfileIntroComponent,
        PanelComponent,
        MatIcon,
        BtnComponent,
        ListViewComponent,
        TranslateModule
    ]
})
export class PageTeamComponent implements OnInit, OnDestroy {
    private teamService = inject(TeamService);
    private athleteService = inject(AthleteService);
    private activatedRoute = inject(ActivatedRoute);
    private routeService = inject(RouteService);

    meetingId: string | undefined;
    private meetingIdSubscription: Subscription;
    team: Team = {} as Team;
    teamId?: string;
    teamAlias?: string;
    athletes: Athlete[] = [];
    listAthletes: IListTile[] = [];

    fetchingTeam: FetchingModel = {fetching: false}
    fetchingAthletes: FetchingModel = {fetching: false}


    constructor() {
        this.meetingIdSubscription = this.routeService.currentMeetingId.subscribe(data => {
            this.meetingId = data;
        })
    }


    ngOnDestroy() {
        this.meetingIdSubscription.unsubscribe();
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(s => {
            const s0: string = s["entity_id"];
            if (s0.includes("@")) {
                this.teamAlias = s0.split("@", 2)[1];
                console.log("found alias: " + this.teamAlias)
            } else {
                this.teamId = s0;
                console.log("found team id: " + this.teamId)
            }
            this.fetchTeam();
        });
    }

    fetchTeam() {
        this.fetchingTeam.fetching = true;
        if (this.teamId) {
            this.teamService.getTeamById(this.teamId).subscribe(data => {
                this.team = data;
                this.fetchingTeam.fetching = false;
            })
        } else if (this.teamAlias) {
            this.teamService.getTeamByAlias(this.teamAlias).subscribe(data => {
                this.team = data;
                this.teamId = data._id;
                this.fetchingTeam.fetching = false;
            })
        }
    }


    fetchAthletes(request: RefreshListRequest) {
        if (!this.teamId) return;
        this.fetchingAthletes.fetching = true;
        if (request.paging.offset == 0) {
            this.athletes = [];
            this.listAthletes = [];
        }
        if (this.meetingId === undefined) {
            this.athleteService.getAthletesByTeam(this.teamId, request.paging).subscribe(data => {
                this.appendAthletes(data);
                this.fetchingAthletes.fetching = false;
            })
        } else {
            this.athleteService.getAthletesByTeamAndMeeting(this.teamId, this.meetingId, request.paging).subscribe(data => {
                this.appendAthletes(data);
                this.fetchingAthletes.fetching = false;
            })
        }
    }

    appendAthletes(athletes: Athlete[]) {
        if (!athletes) return;
        this.athletes.concat(athletes);
        athletes.forEach(athlete => {
            this.listAthletes.push(new TeamAthleteListTile(athlete));
        })
    }
}
