import {Component, Input, OnInit} from '@angular/core';
import {Athlete} from "../../../../core/model";
import {AthleteService} from "../../../../core/service/api";
import {Meeting} from "../../../../core/model/meeting/meeting.model";
import {IListTile} from "../../../../core/model/list/list-tile.model";

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
    this.fetchAthletes();
  }

  fetchAthletes() {
    if (this.meeting) {
      this.athleteService.getAthletesByMeeting(this.meeting.meet_id).subscribe(data => {
        this.setAthletes(data);
      })
    } else {
      this.athleteService.getAthletes().subscribe(data => {
        this.setAthletes(data);
      })
    }
  }

  setAthletes(athletes: Athlete[]) {
    this.athletes = athletes;
    this.listAthletes = (athletes as unknown as IListTile[]);
  }
}
