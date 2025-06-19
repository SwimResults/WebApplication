import { Component, OnDestroy, inject } from '@angular/core';
import {MeetingImpl} from "../../../../core/model/meeting/meeting.model";
import {Subscription} from "rxjs";
import {MeetingPart} from "../../../../core/model/meeting/meeting-part.model";
import {RouteService} from "../../../../core/service/route.service";
import {EventService, MeetingService} from "../../../../core/service/api";
import {FetchingModel} from "../../../../core/model/common/fetching.model";
import {IncidentImpl} from "../../../../core/model/meeting/incident.model";
import {SpinnerComponent} from '../../../../shared/elements/spinner/spinner.component';
import {NoContentComponent} from '../../../../shared/elements/no-content/no-content.component';
import {EventListPartComponent} from '../event-list-part/event-list-part.component';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-event-list',
    templateUrl: './event-list.component.html',
    styleUrls: ['./event-list.component.scss'],
    imports: [SpinnerComponent, NoContentComponent, EventListPartComponent, TranslateModule]
})
export class EventListComponent implements OnDestroy {
    private routeService = inject(RouteService);
    private eventService = inject(EventService);
    private meetingService = inject(MeetingService);

    meeting?: MeetingImpl;
    meetingId?: string;
    meetingSubscription: Subscription;
    meetingIdSubscription: Subscription;
    parts: MeetingPart[] = [];
    fetchingParts: FetchingModel = {fetching: false};

    incidents: Map<number, IncidentImpl[]> = new Map<number, IncidentImpl[]>()

    constructor() {
        this.meetingSubscription = this.routeService.currentMeeting.subscribe(data => {
            this.meeting = new MeetingImpl(data.meeting);
        })
        this.meetingIdSubscription = this.routeService.currentMeetingId.subscribe(data => {
            this.meetingId = data;
            this.fetchingParts.fetching = true;
            if (this.meetingId) {
                this.eventService.getCachedEventsAsPartsByMeeting(this.meetingId).subscribe(data => {
                    this.parts = data;
                    this.fetchingParts.fetching = false;
                });
                this.meetingService.getIncidentsByMeeting(this.meetingId).subscribe(incidents => {
                    for (const incident of incidents) {
                        let event = 0;
                        if (incident.prev_event) {
                            event = incident.prev_event;
                        }
                        if (incident.next_event) {
                            event = incident.next_event;
                        }
                        if (!this.incidents.has(event)) {
                            this.incidents.set(event, []);
                        }
                        this.incidents.get(event)?.push(new IncidentImpl(incident));
                    }
                })
            }
        })
    }

    ngOnDestroy() {
        this.meetingSubscription.unsubscribe();
        this.meetingIdSubscription.unsubscribe();
    }
}
