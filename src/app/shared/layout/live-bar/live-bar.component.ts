import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {HeatImpl} from "../../../core/model/start/heat.model";
import {EventService, HeatService} from "../../../core/service/api";
import {MeetingEventImpl} from "../../../core/model/meeting/meeting-event.model";

@Component({
  selector: 'sr-live-bar',
  templateUrl: './live-bar.component.html',
  styleUrls: ['./live-bar.component.scss']
})
export class LiveBarComponent implements OnInit, OnDestroy {
    @Input() meetingId?: string;

    liveUpdateInterval: number = 15000;

    currentHeat?: HeatImpl
    maxHeat: number = 1;
    event?: MeetingEventImpl;

    private interval: any;

    constructor(
        private heatService: HeatService,
        private eventService: EventService
    ) {
    }

    ngOnInit() {
        this.fetchCurrentHeat();
        this.startLiveCycle();
    }

    ngOnDestroy() {
        this.stopLiveCycle();
    }

    fetchCurrentHeat() {
        if (!this.meetingId) return;
        this.heatService.getCurrentHeat(this.meetingId).subscribe(data => {
            this.currentHeat = new HeatImpl(data);

            if (this.meetingId) {
                this.heatService.getEventHeatInfo(this.meetingId, this.currentHeat.event).subscribe(data => {
                    if (data && data.amount)
                        this.maxHeat = data.amount
                })
                this.eventService.getCachedEventByMeetingAndNumber(this.meetingId, this.currentHeat.event).subscribe(data => {
                    this.event = new MeetingEventImpl(data);
                })
            }
        });
    }

    startLiveCycle() {
        this.interval = setInterval(() => {
            console.log("LIVE CYCLE RUNNING: interval: " + this.liveUpdateInterval + " rnd: " + Math.random());
            this.fetchCurrentHeat()
        }, this.liveUpdateInterval);
    }

    stopLiveCycle() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
}
