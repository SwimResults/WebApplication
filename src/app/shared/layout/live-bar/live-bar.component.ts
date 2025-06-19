import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import {HeatImpl} from "../../../core/model/start/heat.model";
import {EventService, HeatService} from "../../../core/service/api";
import {MeetingEventImpl} from "../../../core/model/meeting/meeting-event.model";
import {RouterLink} from '@angular/router';
import {HeatTimesComponent} from '../../elements/heat-times/heat-times.component';
import {IconPanelComponent} from '../../elements/icon-panel/icon-panel.component';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-live-bar',
    templateUrl: './live-bar.component.html',
    styleUrls: ['./live-bar.component.scss'],
    imports: [RouterLink, HeatTimesComponent, IconPanelComponent, TranslateModule]
})
export class LiveBarComponent implements OnInit, OnDestroy {
    private heatService = inject(HeatService);
    private eventService = inject(EventService);

    @Input() meetingId?: string;

    liveUpdateInterval: number = 15000;

    currentHeat?: HeatImpl
    nextHeat?: HeatImpl
    maxHeat: number = 1;
    event?: MeetingEventImpl;

    statusText?: string;

    private interval: any;

    ngOnInit() {
        this.fetchCurrentHeat();
        this.startLiveCycle();
    }

    ngOnDestroy() {
        this.stopLiveCycle();
    }

    fetchCurrentHeat() {
        if (!this.meetingId) return;
        this.heatService.getCurrentAndNextHeat(this.meetingId).subscribe(data => {
            if (data.current) this.currentHeat = new HeatImpl(data.current); else this.currentHeat = undefined;
            if (data.next) this.nextHeat = new HeatImpl(data.next); else this.nextHeat = undefined;

            this.updateStatusText();

            if (this.meetingId && this.currentHeat) {
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

    updateStatusText() {
        console.log("[LIVE BAR STATUS] refresh live bar status");

        if (this.currentHeat) {
            const now = new Date();   // to check, how long current heat is over
            const finish = this.currentHeat.getFinishedAt();  // to check how long it is over and how much time until next
            const current = this.currentHeat.getStartDelayEstimation();  // to compare dates of current and next

            console.log(finish.getTime())
            console.log(finish.getUTCFullYear())
            if (finish.getUTCFullYear() > 2010) { // current heat is over
                const d = now.getTime() - finish.getTime();

                if (d > 60 * 1000) { // current heat is over for more than 1 minute

                    if (!this.nextHeat) { // no next heat
                        this.statusText = "Ende der Veranstaltung. Kommt gut nach Hause!";
                    } else {

                        const currentPlan = this.currentHeat.getEstimatedStart();
                        const nextPlan = this.nextHeat.getEstimatedStart();

                        const next = this.nextHeat.getStartDelayEstimation(); // to check, if next is today, and if it is a break
                        // TODO: do not check planned time, but finish and start time (has problems with testing the day before)

                        const d2 = next.getTime() - finish.getTime();

                        console.log("current heat is over for a while and next heat exists")

                        console.log(current);
                        console.log(finish);
                        console.log(next);
                        console.log("----");
                        console.log(currentPlan);
                        console.log(nextPlan);

                        // need to compare start dates, since estimations can be different when testing on another day
                        if (currentPlan.getDate() === nextPlan.getDate()) {
                            if (d2 > 60 * 60 * 1000) {
                                this.statusText = "Pause. Es geht weiter um " + this.nextHeat.getStartDelayEstimationTime() + " Uhr";
                            } else {
                                this.statusText = undefined;
                            }
                        } else {
                            if (now.getDate() == currentPlan.getDate()) {
                                this.statusText = "Bis Morgen. Erster Start um " + this.nextHeat.getStartDelayEstimationTime() + " Uhr";
                            } else {
                                this.statusText = "Der Wettkampf beginnt um " + this.nextHeat.getStartDelayEstimationTime();
                            }
                        }
                    }
                } else {
                    this.statusText = undefined;
                }

            } else {
                this.statusText = undefined;
            }
        } else {
            if (this.nextHeat !== undefined) {
                console.log("before meeting");
                this.statusText = "Der Wettkampf beginnt um " + this.nextHeat.getStartDelayEstimationTime();
            } else {
                this.statusText = undefined;
            }
        }
    }

    startLiveCycle() {
        this.interval = setInterval(() => {
            console.log("LIVE CYCLE RUNNING: interval: " + this.liveUpdateInterval + " rnd: " + Math.random());
            this.fetchCurrentHeat();
        }, this.liveUpdateInterval);
    }

    stopLiveCycle() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
}
