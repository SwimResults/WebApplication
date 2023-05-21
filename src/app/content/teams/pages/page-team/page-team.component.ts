import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TeamService} from "../../../../core/service/api/athlete/team.service";
import {Team} from "../../../../core/model";

@Component({
  selector: 'sr-page-team',
  templateUrl: './page-team.component.html',
  styleUrls: ['./page-team.component.scss']
})
export class PageTeamComponent implements OnInit{
  team: Team = {} as Team;
  teamId: string = "";


  constructor(
    private teamService: TeamService,
    private activatedRoute: ActivatedRoute
  ) {
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
}
