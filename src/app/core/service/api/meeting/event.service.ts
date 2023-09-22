import { Injectable } from '@angular/core';
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

  private eventCache: Map<string, Observable<MeetingEvent>> = new Map<string, Observable<MeetingEvent>>();
  private eventLivetimingCache: Map<string, Observable<MeetingEventLivetiming>> = new Map<string, Observable<MeetingEventLivetiming>>();

  constructor(
    private apiService: ApiService
  ) {
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
}
