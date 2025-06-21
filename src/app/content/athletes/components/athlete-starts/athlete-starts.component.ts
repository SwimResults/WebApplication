import {Component, Input, OnInit, inject} from '@angular/core';
import {StartService} from "../../../../core/service/api";
import {Start, StartImpl} from "../../../../core/model/start/start.model";
import {StartListTileConfig} from "../../../../core/model/start/start-list-tile-config.model";
import {FetchingModel} from "../../../../core/model/common/fetching.model";
import {StartListComponent} from '../../../starts';
import {PanelComponent} from "../../../../shared/elements/panel/panel.component";
import {TranslateModule} from "@ngx-translate/core";
import {SpinnerComponent} from "../../../../shared/elements/spinner/spinner.component";

export interface AthleteStartsDay {
    startDate: Date;
    starts: Start[];
    startDateString: string;
}

@Component({
    selector: 'sr-athlete-starts',
    templateUrl: './athlete-starts.component.html',
    styleUrls: ['./athlete-starts.component.scss'],
    imports: [StartListComponent, PanelComponent, TranslateModule, SpinnerComponent]
})
export class AthleteStartsComponent implements OnInit {
    private startService = inject(StartService);

    @Input() athleteId!: string;
    @Input() meetingId?: string;
    starts: Start[] = [];
    startsByDay: Map<string, AthleteStartsDay> = new Map<string, AthleteStartsDay>();
    startByMeeting: Map<string, Start[]> = new Map<string, Start[]>();

    fetchingStarts: FetchingModel = {fetching: false};

    config: StartListTileConfig = {} as StartListTileConfig;

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
            rankStylesIcon: true
        } as StartListTileConfig;
    }

    fetchStarts() {
        this.fetchingStarts.fetching = true;
        if (this.meetingId === undefined) {
            this.startService.getStartsByAthlete(this.athleteId).subscribe(data => {
                this.starts = data;
                this.extractStartsByMeeting();
                this.fetchingStarts.fetching = false;
            })
        } else {
            this.startService.getStartsByMeetingAndAthlete(this.meetingId, this.athleteId).subscribe(data => {
                this.starts = data;
                this.extractStartsByDay();
                this.fetchingStarts.fetching = false;
            })
        }
    }

    extractStartsByDay() {
        this.startsByDay = new Map<string, AthleteStartsDay>();

        for (const start of this.starts) {
            const startAtDate = new StartImpl(start).heat.getStartAt();
            startAtDate.setHours(0, 0, 0, 0);
            const dateString = startAtDate.getDate() + "." + (startAtDate.getMonth() + 1) + "." + startAtDate.getFullYear();
            if (!this.startsByDay.has(dateString)) {
                this.startsByDay.set(dateString, {startDate: startAtDate, starts: [], startDateString: dateString} as AthleteStartsDay);
            }

            this.startsByDay.get(dateString)!.starts.push(start);
        }
    }

    extractStartsByMeeting() {
        this.startByMeeting = new Map<string, Start[]>();

        for (const start of this.starts) {
            const meeting = start.meeting;
            if (!this.startByMeeting.has(meeting)) {
                this.startByMeeting.set(meeting, []);
            }

            this.startByMeeting.get(meeting)!.push(start);
        }
    }

}
