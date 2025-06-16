import {Component, Input, OnInit} from '@angular/core';
import {StartService} from "../../../../core/service/api";
import {Start} from "../../../../core/model/start/start.model";
import {StartListTileConfig} from "../../../../core/model/start/start-list-tile-config.model";
import {FetchingModel} from "../../../../core/model/common/fetching.model";
import {StartListComponent} from '../../../starts/components/start-list/start-list.component';

@Component({
    selector: 'sr-athlete-starts',
    templateUrl: './athlete-starts.component.html',
    styleUrls: ['./athlete-starts.component.scss'],
    imports: [StartListComponent]
})
export class AthleteStartsComponent implements OnInit{
  @Input() athleteId!: string;
  @Input() meetingId?: string;
  starts: Start[] = [];

  fetchingStarts: FetchingModel = {fetching: false};

  config: StartListTileConfig = {} as StartListTileConfig;

  constructor(
    private startService: StartService
  ) {
  }

  ngOnInit() {
    this.fetchStarts();
    this.config = {
      showMeeting: (this.meetingId === undefined),
      showEvent: (this.meetingId !== undefined),
      showHeat: (this.meetingId !== undefined),
      showLane: (this.meetingId !== undefined),
      showStyle: true,
      showIcon: true,
      showTimes: true,
      showRegistrationTime: true,
      showResults: true,
      showResultTime: true,
      showDisqualification: true,
      showReactionTime: true,
      showLapTimes: true,
      rankStylesIcon: true} as StartListTileConfig;
  }

  fetchStarts() {
    this.fetchingStarts.fetching = true;
    if (this.meetingId === undefined) {
      this.startService.getStartsByAthlete(this.athleteId).subscribe(data => {
        this.starts = data;
        this.fetchingStarts.fetching = false;
      })
    } else {
      this.startService.getStartsByMeetingAndAthlete(this.meetingId, this.athleteId).subscribe(data => {
        this.starts = data;
        this.fetchingStarts.fetching = false;
      })
    }
  }

}
