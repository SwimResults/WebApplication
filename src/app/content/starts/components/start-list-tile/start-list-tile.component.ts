import {Component, Input, OnInit} from '@angular/core';
import {Start, StartImpl} from "../../../../core/model/start/start.model";
import {StartId} from "../../../../core/model/start/start-id.model";
import {AthleteService, MeetingService, StartService} from "../../../../core/service/api";
import {StartListTileConfig} from "../../../../core/model/start/start-list-tile-config.model";
import {MeetingImpl} from "../../../../core/model/meeting/meeting.model";
import {Athlete} from "../../../../core/model";

@Component({
  selector: 'sr-start-list-tile',
  templateUrl: './start-list-tile.component.html',
  styleUrls: ['./start-list-tile.component.scss']
})
export class StartListTileComponent implements OnInit {
  @Input() config!: StartListTileConfig;
  @Input() start?: Start;
  @Input() startId?: StartId;
  @Input() startIdentifier?: string;
  data: StartImpl = {} as StartImpl;
  meeting?: MeetingImpl
  athlete?: Athlete;

  constructor(
    private startService: StartService,
    private meetingService: MeetingService,
    private athleteService: AthleteService
  ) {
  }

  ngOnInit() {
    this.fetchStart();
    console.log(this.config)
  }

  fetchStart() {
    if (this.start !== undefined) {
      this.data = new StartImpl(this.start);
      this.continueFetching();
    }
    if (this.startId !== undefined) {
      this.startService.getStartByStartId(this.startId).subscribe(data => {
        this.data = new StartImpl(data);
        this.continueFetching()
      })
    }
    if (this.startIdentifier !== undefined) {
      this.startService.getStartById(this.startIdentifier).subscribe(data => {
        this.data = new StartImpl(data);
        this.continueFetching()
      })
    }
  }

  continueFetching() {
    if (this.config.showMeeting) {
      this.meetingService.getCachedMeetingByMeetId(this.data.meeting).subscribe(data => {
        this.meeting = new MeetingImpl(data);
      });
    }
    if (this.config.showAthlete) {
      this.athleteService.getCachedAthleteById(this.data.athlete).subscribe(data => {
        this.athlete = data;
      })
    }
  }

  getIcon(): string {
    if (!this.data.certified) return "water";
    if (this.data.rank) return "leaderboard";
    if (this.data.disqualification) return "close";
    return "water";
  }

  getIconClass(): string {
    if (this.config.laneAsIcon) return "";
    if (!this.data.certified) return "";
    if (this.data.rank) {
      switch (this.data.rank) {
        case 1: return "rank1"
        case 2: return "rank2"
        case 3: return "rank3"
        default: return ""
      }
    }
    if (this.data.disqualification) return "disqualified";
    return "";
  }

  getIconTextContent(): string | undefined {
    if (this.config.laneAsIcon) return this.data.lane + "";
    if (this.data.certified && this.data.rank) return this.data.rank + ".";
    return undefined;
  }


}
