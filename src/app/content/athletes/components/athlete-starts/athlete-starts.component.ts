import {Component, Input, OnInit} from '@angular/core';
import {StartService} from "../../../../core/service/api";
import {Start} from "../../../../core/model/start/start.model";

@Component({
  selector: 'sr-athlete-starts',
  templateUrl: './athlete-starts.component.html',
  styleUrls: ['./athlete-starts.component.scss']
})
export class AthleteStartsComponent implements OnInit{
  @Input() athleteId!: string;
  starts: Start[] = [];

  constructor(
    private startService: StartService
  ) {
  }

  ngOnInit() {
    this.fetchStarts();
  }

  fetchStarts() {
    this.startService.getStartsByAthlete(this.athleteId).subscribe(data => {
      this.starts = data;
    })
  }

}
