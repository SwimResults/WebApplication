import {Component, Input, OnInit} from '@angular/core';
import {Team} from "../../../../core/model";
import {TeamService} from "../../../../core/service/api/athlete/team.service";
import {Meeting} from "../../../../core/model/meeting/meeting.model";
import {TeamListTile} from "../../../../core/model/list/team-list-tile.model";
import {RefreshListRequest} from "../../../../core/model/list/refresh-list-request.model";

@Component({
  selector: 'sr-team-list-view',
  templateUrl: './team-list-view.component.html',
  styleUrls: ['./team-list-view.component.scss']
})
export class TeamListViewComponent implements OnInit{
  @Input() meeting?: Meeting;
  teams: Team[] = [];
  listTeams: TeamListTile[] = [];

  constructor(
    private teamService: TeamService
  ) {
  }

  ngOnInit(): void {
    //this.fetchTeams({paging: new PagingRequest()});
  }

  fetchTeams(request: RefreshListRequest) {
    if (request.paging.offset == 0) {
      this.teams = [];
      this.listTeams = [];
    }
    if (this.meeting) {
      this.teamService.getTeamsByMeeting(this.meeting.meet_id, request.paging).subscribe(data => {
        this.appendTeams(data)
      })
    } else {
      this.teamService.getTeams(request.paging).subscribe(data => {
        this.appendTeams(data)
      })
    }
  }

  appendTeams(teams: Team[]) {
    this.teams.concat(teams);
    teams.forEach(team => {
      this.listTeams.push(new TeamListTile(team));
    })
  }

  setTeams(teams: Team[]) {
    this.teams = teams;
    this.listTeams = [];
    teams.forEach(team => {
      this.listTeams.push(new TeamListTile(team));
    })
  }

}
