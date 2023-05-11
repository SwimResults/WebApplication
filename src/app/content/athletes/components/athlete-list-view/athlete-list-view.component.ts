import {Component, Input, OnInit} from '@angular/core';
import {Athlete} from "../../../../core/model";
import {AthleteService} from "../../../../core/service/api";
import {Meeting} from "../../../../core/model/meeting/meeting.model";

@Component({
  selector: 'sr-athlete-list-view',
  templateUrl: './athlete-list-view.component.html',
  styleUrls: ['./athlete-list-view.component.scss']
})
export class AthleteListViewComponent implements OnInit{
  @Input() meeting?: Meeting;
  athletes: Athlete[] = [];

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
        this.athletes = data;
      })
    } else {
      this.athleteService.getAthletes().subscribe(data => {
        this.athletes = data;
      })
    }
  }
}
