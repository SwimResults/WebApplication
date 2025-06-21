import { Component, Input, OnInit, inject } from '@angular/core';
import {MeetingPart} from "../../../../core/model/meeting/meeting-part.model";
import {EventListHeatImpl} from "../../../../core/model/start/event-list-heat.model";
import {FetchingModel} from "../../../../core/model/common/fetching.model";
import {MeetingImpl} from "../../../../core/model/meeting/meeting.model";
import {HeatService} from "../../../../core/service/api";
import {IncidentImpl} from "../../../../core/model/meeting/incident.model";
import {PanelComponent} from '../../../../shared/elements/panel/panel.component';
import {EventIncidentComponent} from '../event-incident/event-incident.component';
import {EventListEventComponent} from '../event-list-event/event-list-event.component';
import {SpinnerComponent} from '../../../../shared/elements/spinner/spinner.component';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-event-list-part',
    templateUrl: './event-list-part.component.html',
    styleUrl: './event-list-part.component.scss',
    imports: [PanelComponent, EventIncidentComponent, EventListEventComponent, SpinnerComponent, TranslateModule]
})
export class EventListPartComponent implements OnInit {
    private heatService = inject(HeatService);

    @Input() part!: MeetingPart
    @Input() meetingId!: string;
    @Input() meeting!: MeetingImpl;
    @Input() incidents?: Map<number, IncidentImpl[]>;

    fetchingHeats: FetchingModel = {fetching: false}
    heats: Map<number, EventListHeatImpl> = new Map<number, EventListHeatImpl>()

    ngOnInit() {
        this.fetchHeats();
    }

    fetchHeats() {
        if (!this.meetingId) return;
        this.fetchingHeats.fetching = true;
        const events: number[] = [];
        for (const event of this.part.events) {
            events.push(event.number);
        }
        this.heatService.getHeatsByMeetingForEventListEvents(this.meetingId, events).subscribe({
            next: data => {
                if (data && data.events && data.events.length > 0) {
                    for (const heatInfo of data.events) {
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
