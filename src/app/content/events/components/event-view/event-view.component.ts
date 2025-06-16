import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {Start, StartImpl} from "../../../../core/model/start/start.model";
import {StartListTileConfig} from "../../../../core/model/start/start-list-tile-config.model";
import {ActivatedRoute} from "@angular/router";
import {EventService, FileService, StartService} from "../../../../core/service/api";
import {RouteService} from "../../../../core/service/route.service";
import {MeetingEvent} from "../../../../core/model/meeting/meeting-event.model";
import {HeatImpl} from "../../../../core/model/start/heat.model";
import {MeetingImpl, MeetingStates} from "../../../../core/model/meeting/meeting.model";
import {FetchingModel} from "../../../../core/model/common/fetching.model";
import {StartResults} from "../../../../core/model/start/start-results.model";
import {BtnComponent} from '../../../../shared/elements/buttons/btn/btn.component';
import {MatIcon} from '@angular/material/icon';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {SpinnerComponent} from '../../../../shared/elements/spinner/spinner.component';
import {NoContentComponent} from '../../../../shared/elements/no-content/no-content.component';
import {PanelComponent} from '../../../../shared/elements/panel/panel.component';
import {StartListComponent} from '../../../starts/components/start-list/start-list.component';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-event-view',
    templateUrl: './event-view.component.html',
    styleUrls: ['./event-view.component.scss'],
    imports: [BtnComponent, MatIcon, MatButtonToggleGroup, MatButtonToggle, SpinnerComponent, NoContentComponent, PanelComponent, StartListComponent, TranslateModule]
})
export class EventViewComponent implements OnInit, OnDestroy {
    meeting?: MeetingImpl;
    meetingId?: string;
    meetingSubscription: Subscription;
    meetingIdSubscription: Subscription;
    eventNumber: number = 1;

    event: MeetingEvent = {} as MeetingEvent;

    fileButtonData = {event_number: this.eventNumber};

    starts: Start[] = [];
    heats: Map<number, StartImpl[]> = new Map<number, StartImpl[]>();
    heatData: Map<number, HeatImpl> = new Map<number, HeatImpl>();
    config: StartListTileConfig = {
        showAthlete: true,
        showIcon: true,
        laneAsIcon: true,
        flatStyle: true,
        rankStylesIcon: false,
        showRegistrationTime: true,
        showResults: true,
        showResultTime: true,
        showReactionTime: true,
        showLapTimes: true
    } as StartListTileConfig;

    resultStarts: StartResults[] = [];

    listMode: string = "lanes";

    fetchingStarts: FetchingModel = {fetching: false};

    constructor(
        private activatedRoute: ActivatedRoute,
        private startService: StartService,
        private routeService: RouteService,
        private eventService: EventService,
        private fileService: FileService
    ) {
        this.meetingSubscription = this.routeService.currentMeeting.subscribe(data => {
            this.meeting = new MeetingImpl(data.meeting);
        })
        this.meetingIdSubscription = this.routeService.currentMeetingId.subscribe(data => {
            this.meetingId = data;
        })
    }

    ngOnDestroy() {
        this.meetingSubscription.unsubscribe();
        this.meetingIdSubscription.unsubscribe();
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(s => {
            this.eventNumber = s["event_number"];
            this.fileButtonData.event_number = this.eventNumber;
            this.fetchStarts();
            this.fetchEvent();
        });
    }

    changeListMode(t: string) {
        this.listMode = t

        if (this.listMode == "lanes") {
            this.config.laneAsIcon = true
            this.config.rankStylesIcon = false;
        }
        if (this.listMode == "finish") {
            this.config.laneAsIcon = false
            this.config.rankStylesIcon = false;
        }

        if (this.listMode == "results") {
            this.config.laneAsIcon = false;
            this.config.rankStylesIcon = true;
            this.fetchResultStarts();
            return;
        }

        this.fetchStarts()
    }

    fetchStarts() {
        if (this.meetingId) {
            this.fetchingStarts.fetching = true;
            this.startService.getStartsByMeetingAndEvent(this.meetingId, this.eventNumber).subscribe(data => {
                if (!data) {
                    this.fetchingStarts.fetching = false;
                    return;
                }
                this.starts = data;

                this.heats.clear();

                if (this.starts && this.starts.length > 0) {

                    for (const start of this.starts) {
                        if (start.heat_number <= 0) continue;
                        if (!this.heats.has(start.heat_number)) {
                            this.heats.set(start.heat_number, [])
                            this.heatData.set(start.heat_number, new HeatImpl(start.heat));
                        }
                        this.heats.get(start.heat_number)?.push(new StartImpl(start));
                    }

                    if (this.listMode == "lanes") {
                        for (const heat of this.heats.keys()) {
                            this.heats.get(heat)?.sort((a, b) => a.lane - b.lane)
                        }
                    }

                    if (this.listMode == "finish") {
                        for (const heat of this.heats.keys()) {
                            this.heats.get(heat)?.sort((a, b) => a.disqualification.type ? 1 : (b.disqualification.type ? -1 : a.getResultMilliseconds() - b.getResultMilliseconds()))
                            const starts = this.heats.get(heat);
                            if (starts !== undefined) {
                                let j = 1
                                for (const start of starts) {
                                    if (start.disqualification.type) {
                                        start.rank = 0
                                        continue
                                    }
                                    start.rank = j++;
                                }
                            }
                        }
                    }

                    // sort heats map by heat number
                    this.heats = new Map([...this.heats.entries()].sort((a, b) => a[0] - b[0]));

                    this.fetchingStarts.fetching = false;
                }

            })
        }
    }

    fetchResultStarts() {
        if (this.meetingId) {
            this.fetchingStarts.fetching = true;
            this.startService.getStartsByMeetingAndEventAsResults(this.meetingId, this.eventNumber).subscribe({
                    next: (data => {
                        this.resultStarts = [];
                        for (const age of data) {
                            if (age.starts) {
                                age.starts = age.starts.sort((a, b) => {
                                    const aS = new StartImpl(a);
                                    const bS = new StartImpl(b);
                                    if (aS.disqualification.reason) return 1;
                                    if (bS.disqualification.reason) return -1;
                                    if (!aS.getResultMilliseconds()) return 1;
                                    if (!bS.getResultMilliseconds()) return -1;
                                    return aS.getResultMilliseconds() - bS.getResultMilliseconds();
                                })
                            }
                            this.resultStarts.push(age)
                        }
                        this.fetchingStarts.fetching = false;
                    }),
                    error: (_ => {
                        this.fetchingStarts.fetching = false;
                    })
                }
            );
        }
    }

    fetchEvent() {
        if (this.meetingId && this.eventNumber) {
            this.eventService.getCachedEventByMeetingAndNumber(this.meetingId, this.eventNumber).subscribe(data => {
                this.event = data;
                if (this.meetingId)
                    this.eventService.getEventByMeetingAndNumber(this.meetingId, this.eventNumber).subscribe(event => {
                        this.event = event;
                    })
            })

        }
    }

    getUrlFromMask(mask: string) {
        return this.fileService.getUrlFromMask(mask, this.eventNumber);
    }

    protected readonly MeetingStates = MeetingStates;
}
