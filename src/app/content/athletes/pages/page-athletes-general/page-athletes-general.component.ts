import {Component, OnInit} from '@angular/core';
import {AthleteService} from "../../../../core/service/api";
import {Athlete} from "../../../../core/model";

@Component({
  selector: 'sr-page-athletes-general',
  templateUrl: './page-athletes-general.component.html',
  styleUrls: ['./page-athletes-general.component.scss']
})
export class PageAthletesGeneralComponent implements OnInit{
  athletes: Athlete[] = [];

  constructor(
    private athleteService: AthleteService
  ) {
  }

  ngOnInit(): void {
    this.fetchAthletes();
  }

  fetchAthletes() {
    this.athleteService.getAthletes().subscribe(data => {
      this.athletes = data;
    })
  }
}
