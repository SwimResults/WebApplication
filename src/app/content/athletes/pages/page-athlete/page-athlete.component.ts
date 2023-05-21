import {Component, OnInit} from '@angular/core';
import {Athlete} from "../../../../core/model";
import {AthleteService} from "../../../../core/service/api";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'sr-page-athlete',
  templateUrl: './page-athlete.component.html',
  styleUrls: ['./page-athlete.component.scss']
})
export class PageAthleteComponent implements OnInit{
  athlete: Athlete = {} as Athlete;
  athleteId: string = "";


  constructor(
    private athleteService: AthleteService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(s => {
      this.athleteId = s["entity_id"];
      this.fetchAthlete();
    });
  }

  fetchAthlete() {
    this.athleteService.getAthleteById(this.athleteId).subscribe(data => {
      this.athlete = data;
    })
  }

}
