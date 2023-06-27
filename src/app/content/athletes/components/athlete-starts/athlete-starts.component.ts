import {Component, Input, OnInit} from '@angular/core';
import {StartService} from "../../../../core/service/api";
import {Start} from "../../../../core/model/start/start.model";
import {StartListTileConfig} from "../../../../core/model/start/start-list-tile-config.model";

@Component({
  selector: 'sr-athlete-starts',
  templateUrl: './athlete-starts.component.html',
  styleUrls: ['./athlete-starts.component.scss']
})
export class AthleteStartsComponent implements OnInit{
  @Input() athleteId!: string;
  @Input() meetingId?: string;
  starts: Start[] = [];

  config: StartListTileConfig = {} as StartListTileConfig;

  constructor(
    private startService: StartService
  ) {
  }

  ngOnInit() {
    this.fetchStarts();
    this.config = {showMeeting: (this.meetingId === undefined), showEvent: (this.meetingId !== undefined), showHeat: (this.meetingId !== undefined), showLane: (this.meetingId !== undefined), showStyle: true, showTimes: true} as StartListTileConfig;
  }

  fetchStarts() {
    if (this.meetingId === undefined) {
      this.startService.getStartsByAthlete(this.athleteId).subscribe(data => {
        this.starts = data;
      })
    } else {
      this.startService.getStartsByMeetingAndAthlete(this.meetingId, this.athleteId).subscribe(data => {
        this.starts = data;
      })
    }
  }

}
