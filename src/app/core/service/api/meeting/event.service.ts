import { Injectable, inject } from '@angular/core';
import {BaseService} from "../base.service";
import {environment} from "../../../../../environments/environment";
import {ApiService} from "../api.service";
import {Observable, shareReplay} from "rxjs";
import {MeetingEvent} from "../../../model/meeting/meeting-event.model";
import {MeetingPart} from "../../../model/meeting/meeting-part.model";
import {MeetingEventLivetiming} from "../../../model/meeting/meeting-event-livetiming.model";

@Injectable({
  providedIn: 'root'
})
export class EventService extends BaseService {
    private apiService = inject(ApiService);


    private eventCache: Map<string, Observable<MeetingEvent>> = new Map<string, Observable<MeetingEvent>>();
    private eventPartCache: Map<string, Observable<MeetingPart[]>> = new Map<string, Observable<MeetingPart[]>>();
    private eventLivetimingCache: Map<string, Observable<MeetingEventLivetiming>> = new Map<string, Observable<MeetingEventLivetiming>>();

    constructor() {
        super("EventService", environment.api_urls.meeting_service);
    }

    getEventById(id: string): Observable<MeetingEvent> {
        return this.apiService.get(this.API_URL, "event/" + id);
    }

    getEventByMeetingAndNumber(meet_id: string, number: number): Observable<MeetingEvent> {
        return this.apiService.get(this.API_URL, "event/meet/" + meet_id + "/event/" + number);
    }

    getEventByMeetingAndNumberForLivetiming(meet_id: string, number: number): Observable<MeetingEventLivetiming> {
        return this.apiService.get(this.API_URL, "event/meet/" + meet_id + "/event/" + number + "/livetiming");
    }

    getEventsByMeeting(meet_id: string): Observable<MeetingEvent[]> {
        return this.apiService.get(this.API_URL, "event/meet/" + meet_id);
    }

    getEventsAsPartsByMeeting(meet_id: string): Observable<MeetingPart[]> {
        return this.apiService.get(this.API_URL, "event/meet/" + meet_id + "/parts");
    }
    public getCachedEventsAsPartsByMeeting(meet_id: string): Observable<MeetingPart[]> {
        let parts: Observable<MeetingPart[]> | undefined = this.eventPartCache.get(meet_id);
        if (parts) {
            this.log("load event parts for " + meet_id + " from cache", "info");
            return parts;
        } else {
            parts = this.getEventsAsPartsByMeeting(meet_id).pipe(shareReplay(1));
            this.eventPartCache.set(meet_id, parts);
            return parts;
        }
    }

    public getCachedEventByMeetingAndNumber(meet_id: string, number: number): Observable<MeetingEvent> {
        let event: Observable<MeetingEvent> | undefined = this.eventCache.get(meet_id + "." + number);
        if (event) {
            this.log("load meeting " + meet_id + "." + number + " from cache", "info");
            return event;
        } else {
            event = this.getEventByMeetingAndNumber(meet_id, number).pipe(shareReplay(1));
            this.eventCache.set(meet_id + "." + number, event);
            return event;
        }
    }

    public getCachedEventByMeetingAndNumberForLivetiming(meet_id: string, number: number): Observable<MeetingEventLivetiming> {
        let event: Observable<MeetingEventLivetiming> | undefined = this.eventLivetimingCache.get(meet_id + "." + number);
        if (event) {
            this.log("load meeting " + meet_id + "." + number + " from cache for livetiming", "info");
            return event;
        } else {
        event = this.getEventByMeetingAndNumberForLivetiming(meet_id, number).pipe(shareReplay(1));
            this.eventLivetimingCache.set(meet_id + "." + number, event);
            return event;
        }
    }

    public updateEventCertification(meeting: string, number: number): Observable<MeetingEvent> {
        const data = {toggle_certification: true};
        return this.apiService.post(this.API_URL, "event/meet/" + meeting + "/event/" + number + "/certification", data);
    }
}
