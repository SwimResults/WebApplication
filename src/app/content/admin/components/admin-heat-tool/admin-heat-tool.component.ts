import {Component, Input, OnInit} from '@angular/core';
import {Start} from "../../../../core/model/start/start.model";
import {Heat, HeatImpl} from "../../../../core/model/start/heat.model";
import {FetchingModel} from "../../../../core/model/common/fetching.model";
import {StartListTileConfig} from "../../../../core/model/start/start-list-tile-config.model";
import {EventService, HeatService, StartService} from "../../../../core/service/api";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MeetingEvent} from "../../../../core/model/meeting/meeting-event.model";
import {EasyWkService} from "../../../../core/service/api/import/easy-wk.service";
import {Observable} from "rxjs";

@Component({
  selector: 'sr-admin-heat-tool',
  templateUrl: './admin-heat-tool.component.html',
  styleUrls: ['./admin-heat-tool.component.scss']
})
export class AdminHeatToolComponent implements OnInit {
  @Input() meetingId?: string;

  @Input() showHeat?: Observable<Heat>;

  heat?: HeatImpl;
  starts: Start[] = [];

  maxHeats: number = 100;

  event: MeetingEvent = {} as MeetingEvent;

  currentEvent: number = 1;
  currentHeat: number = 1;

  availableMeters: number[] = [];
  availableLanes: number[] = [];

  runningUpdateTime: string = "";

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
  passwordForm: FormGroup;
  timesForm: FormGroup;
  resultForm: FormGroup;

  password: string | null = null;

  constructor(
    private startService: StartService,
    private heatService: HeatService,
    private eventService: EventService,
    private easyWkService: EasyWkService,
    private fb: FormBuilder,
  ) {
    this.heatForm = this.fb.group({
      event: [],
      heat: []
    })
    this.passwordForm = this.fb.group({
      pwd: []
    })
    this.timesForm = this.fb.group({
      estimation: [],
      start: [],
      finished: []
    })
    this.resultForm = this.fb.group({
      lane: [],
      result: [],
      meters: [],
      finished: []
    })
  }

  ngOnInit() {
    this.fetchStarts();
    this.fetchEvent();
    this.password = window.sessionStorage.getItem("livetiming_key");
    this.passwordForm.setValue({pwd: this.password});

    if (this.showHeat) {
      this.showHeat.subscribe(h => {
        this.heatForm.value.event = h.event;
        this.heatForm.value.heat = h.number;
        this.setHeat();
      })
    }
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
          this.updateHeatTimes();
          this.fetchHeatAmount();
        }
        this.starts = data;
        this.availableLanes = []
        for (const start of this.starts) {
          this.availableLanes.push(start.lane);
        }
      }
      this.fetchingStarts.fetching = false;
    });
  }

  fetchEvent() {
    if (this.meetingId && this.currentEvent) {
      this.eventService.getCachedEventByMeetingAndNumber(this.meetingId, this.currentEvent).subscribe(data => {
        this.event = data;
        this.heatForm.setValue({
          event:  this.event.number,
          heat: this.currentHeat
        });
        this.availableMeters = [];
        for (let i = 25; i <= this.event.distance; i += 25) {
          this.availableMeters.push(i)
        }
      })
    }
  }

  fetchHeatAmount() {
    if (this.meetingId)
      this.heatService.getEventHeatInfo(this.meetingId, this.currentEvent).subscribe(data => {
        if (data && data.amount)
          this.maxHeats = data.amount
      })
  }

  setHeat() {
    this.currentEvent = this.heatForm.value.event;
    this.currentHeat = this.heatForm.value.heat;
    this.fetchStarts();
    this.fetchEvent();
  }

  setPassword() {
    this.password = this.passwordForm.value.pwd;
    window.sessionStorage.setItem("livetiming_key", "" + this.password);
  }

  unsetPassword() {
    this.password = "";
    this.passwordForm.setValue({
      pwd: ""
    });
    window.sessionStorage.setItem("livetiming_key", "");
  }

  private updateHeatTimes() {
    if (this.heat) {
      this.timesForm.setValue(
        {
          estimation: this.getTimeString(this.heat.getStartDelayEstimation()),
          start: this.getTimeString(this.heat.getStartAt()),
          finished: this.getTimeString(this.heat.getFinishedAt()),
        }
      )
    }
  }

  private getTimeString(date: Date) {
    return date.getHours() + ":" + date.getMinutes();
  }

  // BUTTON ACTIONS:

  startHeat() {
    if (this.password)
      this.easyWkService.newRace(this.password, this.currentEvent, this.currentHeat).subscribe(data => data == "OK" ? this.fetchStarts() : null);
  }

  finishHeat() {
    if (this.password)
      this.easyWkService.raceResult(this.password).subscribe(data => data == "OK" ? this.fetchStarts() : null);
  }

  deleteResults() {

  }

  verifyResults() {

  }

  modifyTimes(time_type: string) {
    if (this.heat) {
      this.runningUpdateTime = time_type;

      let time_input = this.timesForm.value[time_type];

      const t: string[] = time_input.split(":");

      let tt = "";
      switch (time_type) {
        case "estimation":
          tt = "start_delay_estimation";
          break;
        case "start":
          tt = "start_at";
          break;
        case "finished":
          tt = "finished_at";
          break;
      }

      let d = new Date();

      // 2023-11-07T05:30:00.000Z
      const zero = "" + ("0" + t[0]).substr(-2) + ":" + ("0" + t[1]).substr(-2);
      let time;
      if (time_input === zero) {
        time = "0000-01-01T00:00";
      } else {
        time = ("000" + d.getFullYear()).substr(-4) + "-" + ("0" + d.getMonth()).substr(-2) + "-" + ("0" + d.getDay()).substr(-2) + "T";
        time += ("0" + t[0]).substr(-2) + ":" + ("0" + t[1]).substr(-2);
      }

      time += ":00.000Z";

      console.log(time);

      this.heatService.updateHeatTime(this.heat._id, tt, time).subscribe({
        next: (_ => {
          this.runningUpdateTime = "";
        }),
        error: (_ => {
          this.runningUpdateTime = "";
        })
      });
    }
  }

  addResult() {
    const lane = this.resultForm.value.lane;
    let result: string = this.resultForm.value.result;
    const meters = this.resultForm.value.meters;
    const finished = this.resultForm.value.finished;

    console.log(finished);

    result = result.replaceAll(":", "");
    result = result.replaceAll(",", "");
    result = result.replaceAll(";", "");

    if (this.password) {
      this.easyWkService.time(this.password, parseInt(lane), meters, parseInt(result), finished).subscribe(data => data == "OK" ? this.fetchStarts() : null);
    }
  }
}
