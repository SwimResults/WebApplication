import { Component, OnDestroy, OnInit, inject } from '@angular/core';
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
import {StartListComponent} from '../../../starts';
import {TranslateModule} from '@ngx-translate/core';
import {UserDataService} from "../../../../core/service/user-data.service";
import {AthleteRelation} from "../../../../core/model/user/follower.model";

@Component({
    selector: 'sr-event-view',
    templateUrl: './event-view.component.html',
    styleUrls: ['./event-view.component.scss'],
    imports: [BtnComponent, MatIcon, MatButtonToggleGroup, MatButtonToggle, SpinnerComponent, NoContentComponent, PanelComponent, StartListComponent, TranslateModule]
})
export class EventViewComponent implements OnInit, OnDestroy {
    private activatedRoute = inject(ActivatedRoute);
    private startService = inject(StartService);
    private routeService = inject(RouteService);
    private eventService = inject(EventService);
    private fileService = inject(FileService);
    private userDataService = inject(UserDataService);

    meeting?: MeetingImpl;
    meetingId?: string;
    meetingSubscription: Subscription;
    meetingIdSubscription: Subscription;
    followingSubscription: Subscription;
    eventNumber: number = 1;

    event: MeetingEvent = {} as MeetingEvent;

    following: AthleteRelation[] = [];

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

    constructor() {
        this.meetingSubscription = this.routeService.currentMeeting.subscribe(data => {
            this.meeting = new MeetingImpl(data.meeting);
        })
        this.meetingIdSubscription = this.routeService.currentMeetingId.subscribe(data => {
            this.meetingId = data;
        })
        this.followingSubscription = this.userDataService.following.subscribe(data => {
            this.following = data;
        })
    }

    ngOnDestroy() {
        this.meetingSubscription.unsubscribe();
        this.meetingIdSubscription.unsubscribe();
        this.followingSubscription.unsubscribe();
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
                    window.scrollTo(0, 0);
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

                                // TODO: reassign ranks for all age groups, not working because of starters being not in the ranking:
                                // https://bsv-sws.de/images/ergebnisdienst/bm2025/proto_wk002.pdf
                                // Assign ranks
                                // let currentRank = 1;
                                // let lastTime: number | null = null;
                                // let skippedRanks = 0;
                                //
                                // for (let i = 0; i < age.starts.length; i++) {
                                //     const start = age.starts[i];
                                //     const startImpl = new StartImpl(start);
                                //
                                //     if (startImpl.disqualification.reason || !startImpl.getResultMilliseconds()) {
                                //         start.rank = 0;
                                //         skippedRanks++;
                                //         continue;
                                //     }
                                //
                                //     const time = startImpl.getResultMilliseconds();
                                //
                                //     if (lastTime === null) {
                                //         start.rank = currentRank;
                                //     } else if (time === lastTime) {
                                //         start.rank = currentRank;
                                //         skippedRanks++;
                                //     } else {
                                //         currentRank += skippedRanks + 1;
                                //         start.rank = currentRank;
                                //         skippedRanks = 0;
                                //     }
                                //
                                //     lastTime = time;
                                // }
                            }
                            this.resultStarts.push(age)
                        }
                        this.fetchingStarts.fetching = false;
                        window.scrollTo(0, 0);
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
