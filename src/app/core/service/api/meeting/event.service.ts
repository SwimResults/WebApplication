import { Injectable } from '@angular/core';
import {BaseService} from "../base.service";
import {environment} from "../../../../../environments/environment";
import {ApiService} from "../api.service";
import {Observable, shareReplay} from "rxjs";
import {MeetingEvent} from "../../../model/meeting/meeting-event.model";

@Injectable({
  providedIn: 'root'
})
export class EventService extends BaseService {

  private eventCache: Map<string, Observable<MeetingEvent>> = new Map<string, Observable<MeetingEvent>>();

  constructor(
    private apiService: ApiService
  ) {
    super("EventService", environment.api_urls.meeting_service);
  }

  getEventById(id: string): Observable<MeetingEvent> {
    return this.apiService.get(this.API_URL, "event/" + id);
  }

  getEventByMeetingAndNumber(meet_id: string, number: string): Observable<MeetingEvent> {
    return this.apiService.get(this.API_URL, "event/meet/" + meet_id + "/event/" + number);
  }

  getEventsByMeeting(meet_id: string): Observable<MeetingEvent[]> {
    return this.apiService.get(this.API_URL, "event/meet/" + meet_id);
  }

  public getCachedEventByMeetingAndNumber(meet_id: string, number: string): Observable<MeetingEvent> {
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
}
