import {Component, OnInit} from '@angular/core';
import {AthleteService} from "../../../../core/service/api";
import {Athlete} from "../../../../core/model";
import {PagingRequest} from "../../../../core/model/common/paging-request.model";

@Component({
  selector: 'sr-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss']
})
export class Example1Component implements OnInit {
  athletes: Athlete[] = [];

  constructor(
    private athleteService: AthleteService
  ) {
  }

  ngOnInit(): void {
    this.athleteService.getAthletes(new PagingRequest()).subscribe(data => {
      this.athletes = data;
    })
  }

}
