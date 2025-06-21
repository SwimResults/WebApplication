import { Component, Input, inject } from '@angular/core';
import {Team} from "../../../../core/model";
import {TeamService} from "../../../../core/service/api";
import {Meeting} from "../../../../core/model/meeting/meeting.model";
import {TeamListTile} from "../../../../core/model/list/team-list-tile.model";
import {RefreshListRequest} from "../../../../core/model/list/refresh-list-request.model";
import {FetchingModel} from "../../../../core/model/common/fetching.model";
import {ListViewComponent} from '../../../../shared/elements/list/list-view/list-view.component';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-team-list-view',
    templateUrl: './team-list-view.component.html',
    styleUrls: ['./team-list-view.component.scss'],
    imports: [ListViewComponent, TranslateModule]
})
export class TeamListViewComponent {
  private teamService = inject(TeamService);

  @Input() meeting?: Meeting;
  @Input() meetingId: string | undefined;
  teams: Team[] = [];
  listTeams: TeamListTile[] = [];

  fetchingTeams: FetchingModel = {fetching: false};

  fetchTeams(request: RefreshListRequest) {
    this.fetchingTeams.fetching = true;
    if (request.paging.offset == 0) {
      this.teams = [];
      this.listTeams = [];
    }
    if (this.meetingId !== undefined) {
      this.teamService.getTeamsByMeeting(this.meetingId, request.paging).subscribe(data => {
        this.appendTeams(data)
        this.fetchingTeams.fetching = false;
      })
    } else {
      this.teamService.getTeams(request.paging).subscribe(data => {
        this.appendTeams(data)
        this.fetchingTeams.fetching = false;
      })
    }
  }

  appendTeams(teams: Team[]) {
    if (!teams) return;
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
