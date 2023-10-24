import {Component, Input, OnInit} from '@angular/core';
import {Start} from "../../../../core/model/start/start.model";
import {HeatImpl} from "../../../../core/model/start/heat.model";
import {FetchingModel} from "../../../../core/model/common/fetching.model";
import {StartListTileConfig} from "../../../../core/model/start/start-list-tile-config.model";
import {EventService, StartService} from "../../../../core/service/api";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MeetingEvent} from "../../../../core/model/meeting/meeting-event.model";

@Component({
  selector: 'sr-admin-heat-tool',
  templateUrl: './admin-heat-tool.component.html',
  styleUrls: ['./admin-heat-tool.component.scss']
})
export class AdminHeatToolComponent implements OnInit {
  @Input() meetingId?: string;
  heat?: HeatImpl;
  starts: Start[] = [];

  maxHeats: number = 100;

  event: MeetingEvent = {} as MeetingEvent;

  currentEvent: number = 1;
  currentHeat: number = 1;

  fetchingStarts: FetchingModel = {fetching: false};
  config: StartListTileConfig = {
    showAthlete: true,
    laneAsIcon: true,
    flatStyle: true,
    rankStylesIcon: false,
    showRegistrationTime: true,
    showResults: true,
    showResultTime: true,
    showReactionTime: true,
    showLapTimes: true
  } as StartListTileConfig;

  heatForm: FormGroup;

  constructor(
    private startService: StartService,
    private fb: FormBuilder,
    private eventService: EventService
  ) {
    this.heatForm = this.fb.group({
      event: [],
      heat: []
    })
  }

  ngOnInit() {
    this.fetchStarts();
    this.fetchEvent();
  }

  fetchStarts() {
    if (!this.meetingId) return;
    this.fetchingStarts.fetching = true;
    this.startService.getStartsByMeetingAndEventAndHeat(this.meetingId, this.currentEvent, this.currentHeat).subscribe(data => {
      console.log("fetched:")
      console.log(data)
      if (data) {
        if (data.length > 0) {
          this.heat = new HeatImpl(data[0].heat);
        }
        this.starts = data;
      }
      this.fetchingStarts.fetching = false;
    });
  }

  fetchEvent() {
    if (this.meetingId && this.currentEvent) {
      this.eventService.getCachedEventByMeetingAndNumber(this.meetingId, this.currentEvent).subscribe(data => {
        this.event = data;
      })
    }
  }

  setHeat() {
    this.currentEvent = this.heatForm.value.event;
    this.currentHeat = this.heatForm.value.heat;
    this.fetchStarts();
    this.fetchEvent();
  }
}
