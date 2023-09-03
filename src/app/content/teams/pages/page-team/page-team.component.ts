import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Athlete, Team} from "../../../../core/model";
import {IListTile} from "../../../../core/model/list/list-tile.model";
import {AthleteService, TeamService} from "../../../../core/service/api";
import {RefreshListRequest} from "../../../../core/model/list/refresh-list-request.model";
import {TeamAthleteListTile} from "../../../../core/model/list/team-athlete-list-tile.model";
import {Subscription} from "rxjs";
import {RouteService} from "../../../../core/service/route.service";

@Component({
  selector: 'sr-page-team',
  templateUrl: './page-team.component.html',
  styleUrls: ['./page-team.component.scss']
})
export class PageTeamComponent implements OnInit, OnDestroy {
  meetingId: string | undefined;
  private meetingIdSubscription: Subscription;
  team: Team = {} as Team;
  teamId?: string;
  teamAlias?: string;
  athletes: Athlete[] = [];
  listAthletes: IListTile[] = [];


  constructor(
    private teamService: TeamService,
    private athleteService: AthleteService,
    private activatedRoute: ActivatedRoute,
    private routeService: RouteService
  ) {
    this.meetingIdSubscription = this.routeService.currentMeetingId.subscribe(data => {
      this.meetingId = data;
    })
  }


  ngOnDestroy() {
    this.meetingIdSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(s => {
      let s0: string = s["entity_id"];
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
    if (this.teamId) {
      this.teamService.getTeamById(this.teamId).subscribe(data => {
        this.team = data;
      })
    } else if (this.teamAlias) {
      this.teamService.getTeamByAlias(this.teamAlias).subscribe(data => {
        this.team = data;
        this.teamId = data._id
      })
    }
  }



  fetchAthletes(request: RefreshListRequest) {
    if (!this.teamId) return;
    if (request.paging.offset == 0) {
      this.athletes = [];
      this.listAthletes = [];
    }
    if (this.meetingId === undefined) {
      this.athleteService.getAthletesByTeam(this.teamId, request.paging).subscribe(data => {
        this.appendAthletes(data);
      })
    } else {
      this.athleteService.getAthletesByTeamAndMeeting(this.teamId, this.meetingId, request.paging).subscribe(data => {
        this.appendAthletes(data);
      })
    }
  }

  appendAthletes(athletes: Athlete[]) {
    this.athletes.concat(athletes);
    athletes.forEach(athlete => {
      this.listAthletes.push(new TeamAthleteListTile(athlete));
    })
  }
}
