import {Component, Input, OnInit} from '@angular/core';
import {MeetingPart} from "../../../../core/model/meeting/meeting-part.model";
import {EventListHeatImpl} from "../../../../core/model/start/event-list-heat.model";
import {FetchingModel} from "../../../../core/model/common/fetching.model";
import {MeetingImpl} from "../../../../core/model/meeting/meeting.model";
import {HeatService} from "../../../../core/service/api";
import {Incident, IncidentImpl} from "../../../../core/model/meeting/incident.model";

@Component({
    selector: 'sr-event-list-part',
    templateUrl: './event-list-part.component.html',
    styleUrl: './event-list-part.component.scss',
    standalone: false
})
export class EventListPartComponent implements OnInit {
    @Input() part!: MeetingPart
    @Input() meetingId!: string;
    @Input() meeting!: MeetingImpl;
    @Input() incidents?: Map<number, IncidentImpl[]>;

    fetchingHeats: FetchingModel = {fetching: false}
    heats: Map<number, EventListHeatImpl> = new Map<number, EventListHeatImpl>()

    constructor(
        private heatService: HeatService
    ) {
    }

    ngOnInit() {
        this.fetchHeats();
    }

    fetchHeats() {
        if (!this.meetingId) return;
        this.fetchingHeats.fetching = true;
        let events: number[] = [];
        for (const event of this.part.events) {
            events.push(event.number);
        }
        this.heatService.getHeatsByMeetingForEventListEvents(this.meetingId, events).subscribe({
            next: data => {
                if (data && data.events && data.events.length > 0) {
                    for (let heatInfo of data.events) {
                        this.heats.set(heatInfo.event_number, new EventListHeatImpl(heatInfo));
                    }
                }
                this.fetchingHeats.fetching = false;
            },
            error: err => {
                this.fetchingHeats.fetching = false;
                console.log(err);
            }
        })
    }
}
