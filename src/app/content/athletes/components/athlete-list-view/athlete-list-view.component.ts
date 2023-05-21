import {Component, Input, OnInit} from '@angular/core';
import {Athlete} from "../../../../core/model";
import {AthleteService} from "../../../../core/service/api";
import {Meeting} from "../../../../core/model/meeting/meeting.model";
import {IListTile} from "../../../../core/model/list/list-tile.model";
import {RefreshListRequest} from "../../../../core/model/list/refresh-list-request.model";
import {AthleteListTile} from "../../../../core/model/list/athlete-list-tile.model";

@Component({
  selector: 'sr-athlete-list-view',
  templateUrl: './athlete-list-view.component.html',
  styleUrls: ['./athlete-list-view.component.scss']
})
export class AthleteListViewComponent implements OnInit{
  @Input() meeting?: Meeting;
  athletes: Athlete[] = [];
  listAthletes: IListTile[] = [];

  constructor(
    private athleteService: AthleteService
  ) {
  }

  ngOnInit(): void {
    //this.fetchAthletes({paging: new PagingRequest()});
  }

  fetchAthletes(request: RefreshListRequest) {
    if (request.paging.offset == 0) {
      this.athletes = [];
      this.listAthletes = [];
    }
    if (this.meeting) {
      this.athleteService.getAthletesByMeeting(this.meeting.meet_id, request.paging).subscribe(data => {
        this.appendAthletes(data);
      })
    } else {
      this.athleteService.getAthletes(request.paging).subscribe(data => {
        this.appendAthletes(data);
      })
    }
  }

  appendAthletes(athletes: Athlete[]) {
    this.athletes.concat(athletes);
    athletes.forEach(athlete => {
      this.listAthletes.push(new AthleteListTile(athlete));
    })
  }

  setAthletes(athletes: Athlete[]) {
    this.athletes = athletes;
    this.listAthletes = [];
    athletes.forEach(athlete => {
      this.listAthletes.push(new AthleteListTile(athlete));
    })
  }
}
