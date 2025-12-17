import { Component, Input, OnInit, inject } from '@angular/core';
import {ResultTypes, Start, StartImpl} from "../../../../core/model/start/start.model";
import {StartId} from "../../../../core/model/start/start-id.model";
import {EventService, MeetingService, StartService} from "../../../../core/service/api";
import {StartListTileConfig} from "../../../../core/model/start/start-list-tile-config.model";
import {MeetingImpl} from "../../../../core/model/meeting/meeting.model";
import {MeetingEvent} from "../../../../core/model/meeting/meeting-event.model";
import {HeatTimesComponent} from '../../../../shared/elements/heat-times/heat-times.component';
import {IconPanelComponent} from '../../../../shared/elements/icon-panel/icon-panel.component';
import {RouterLink} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {TranslateModule} from '@ngx-translate/core';
import {AthleteRelation, AthleteRelationType} from "../../../../core/model/user/follower.model";

@Component({
    selector: 'sr-start-list-tile',
    templateUrl: './start-list-tile.component.html',
    styleUrls: ['./start-list-tile.component.scss'],
    imports: [HeatTimesComponent, IconPanelComponent, RouterLink, MatIcon, TranslateModule]
})
export class StartListTileComponent implements OnInit {
    private startService = inject(StartService);
    private meetingService = inject(MeetingService);
    private eventService = inject(EventService);

    @Input() config!: StartListTileConfig;
    @Input() start?: Start;
    @Input() startId?: StartId;
    @Input() startIdentifier?: string;
    @Input() athletes: AthleteRelation[] = [];

    data: StartImpl = {} as StartImpl;
    meeting?: MeetingImpl
    //athlete?: Athlete;
    event?: MeetingEvent;

    resultTypes = ResultTypes

    laneParam = {lane: ""}

    ngOnInit() {
        this.fetchStart();
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
        this.laneParam = {lane: String(this.data.lane)}
    }

    continueFetching() {
        if (this.config.showMeeting) {
            this.meetingService.getCachedMeetingByMeetId(this.data.meeting).subscribe(data => {
                this.meeting = new MeetingImpl(data);
            });
        }
        // if (this.config.showAthlete) {
        //   this.athleteService.getCachedAthleteById(this.data.athlete).subscribe(data => {
        //     this.athlete = data;
        //   })
        // }
        if (this.config.showStyle) {
            this.eventService.getCachedEventByMeetingAndNumber(this.data.meeting, this.data.event).subscribe(data => {
                this.event = data;
            })
        }
    }

    getIcon(): string {
        if (!this.data.certified) return "water";
        if (this.data.rank) return "leaderboard";
        if (this.data.disqualification && this.data.disqualification.type) return "close";
        return "water";
    }

    getIconClass(): string {
        if (this.config && this.config.laneAsIcon) return "";
        if (!this.data.certified) return "";
        if (this.config && this.config.rankStylesIcon) {
            if (this.data.rank) {
                switch (this.data.rank) {
                    case 1:
                        return "rank1"
                    case 2:
                        return "rank2"
                    case 3:
                        return "rank3"
                    default:
                        return ""
                }
            }
        }
        if (this.data && this.data.disqualification && this.data.disqualification.type) return "disqualified";
        return "";
    }

    getIconTextContent(): string | undefined {
        if (this.config && this.config.laneAsIcon) return this.data.lane + "";
        //if (this.data.certified && this.data.rank) return this.data.rank + ".";
        if (this.data.rank) return this.data.rank + ".";
        return undefined;
    }

    getAthleteNameClass(): string {
        const relation = this.athletes.find(
            (r: AthleteRelation) => r.athleteId === this.data.athlete
        );

        if (!relation) {
            return '';
        }

        switch (relation.type) {
            case AthleteRelationType.SELF:
                return 'self';
            case AthleteRelationType.FOLLOW:
                return 'following';
            default:
                return '';
        }
    }

    getStyleType(): string {
        if (this.config && this.config.flatStyle) return "flat";
        return "default";
    }

    getTimeString(time: number): string {
        if (!time) return "-";
        const d = new Date((time / 1000) / 1000)
        const minutes = "0" + d.getMinutes()
        const seconds = "0" + d.getSeconds()
        const millis = "0" + Math.floor(d.getMilliseconds() / 10)
        return minutes.substr(-2) + ":" + seconds.substr(-2) + "," + millis.substr(-2)
    }

    getReactionString(time: number): string {
        const d = new Date((time / 1000) / 1000)
        const millis = "0" + (d.getMilliseconds() / 10)
        return d.getSeconds() + "," + millis.substr(-2)
    }


    getReason() {
        if (this.data.disqualification.type == "dns") {
            return "Nicht am Start!"
        }
        if (this.data.disqualification.type == "dnf") {
            return "Schwimmstrecke nicht beendet"
        }

        if (this.data.disqualification.reason) {
            return this.data.disqualification.reason
        }

        return "Disqualifiziert!";
    }

    getGotBetter(): boolean {
        return (!this.data.getTimeMilliseconds(ResultTypes.REGISTRATION) || this.data.getTimeMilliseconds(ResultTypes.REGISTRATION) <= 0) ? true : (this.data.getResultMilliseconds() < this.data.getTimeMilliseconds(ResultTypes.REGISTRATION))
    }
}
