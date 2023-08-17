import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TeamService} from "../../../../core/service/api/athlete/team.service";
import {Athlete, Team} from "../../../../core/model";
import {IListTile} from "../../../../core/model/list/list-tile.model";
import {AthleteService} from "../../../../core/service/api";
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
  teamId: string = "";
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
      this.teamId = s["entity_id"];
      this.fetchTeam();
    });
  }

  fetchTeam() {
    this.teamService.getTeamById(this.teamId).subscribe(data => {
      this.team = data;
    })
  }



  fetchAthletes(request: RefreshListRequest) {
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
