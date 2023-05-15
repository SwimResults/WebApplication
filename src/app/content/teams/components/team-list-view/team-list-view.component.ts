import {Component, Input, OnInit} from '@angular/core';
import {Team} from "../../../../core/model";
import {TeamService} from "../../../../core/service/api/athlete/team.service";
import {Meeting} from "../../../../core/model/meeting/meeting.model";

@Component({
  selector: 'sr-team-list-view',
  templateUrl: './team-list-view.component.html',
  styleUrls: ['./team-list-view.component.scss']
})
export class TeamListViewComponent implements OnInit{
  @Input() meeting?: Meeting;
  teams: Team[] = [];

  constructor(
    private teamService: TeamService
  ) {
  }

  ngOnInit(): void {
    this.fetchTeams();
  }

  fetchTeams() {
    if (this.meeting) {
      this.teamService.getTeamsByMeeting(this.meeting.meet_id).subscribe(data => {
        this.teams = data;
      })
    } else {
      this.teamService.getTeams().subscribe(data => {
        this.teams = data;
      })
    }
  }

}
