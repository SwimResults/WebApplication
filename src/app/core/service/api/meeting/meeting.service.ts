import { Injectable, inject } from '@angular/core';
import {ApiService} from "../api.service";
import {Observable, shareReplay} from "rxjs";
import {Meeting} from "../../../model/meeting/meeting.model";
import {BaseService} from "../base.service";
import {environment} from "../../../../../environments/environment";
import {Incident} from "../../../model/meeting/incident.model";

@Injectable({
  providedIn: 'root'
})
export class MeetingService extends BaseService {
  private apiService = inject(ApiService);


  private meetingCache: Map<string, Observable<Meeting>> = new Map<string, Observable<Meeting>>();

  constructor() {
    super("MeetingService", environment.api_urls.meeting_service);
  }

  public getMeetings(): Observable<Meeting[]> {
    return this.apiService.get(this.API_URL, "meeting");
  }

  public getMeetingByMeetId(id: string): Observable<Meeting> {
    return this.apiService.get(this.API_URL, "meeting/meet/" + id);
  }

  public getCachedMeetingByMeetId(id: string): Observable<Meeting> {
    let meeting: Observable<Meeting> | undefined = this.meetingCache.get(id);
    if (meeting) {
      this.log("load meeting " + id + " from cache", "info");
      return meeting;
    } else {
      meeting = this.getMeetingByMeetId(id).pipe(shareReplay(1));
      this.meetingCache.set(id, meeting);
      return meeting;
    }
  }

  public getIncidentsByMeeting(meeting: string): Observable<Incident[]> {
      return this.apiService.get(this.API_URL, "incident/meet/" + meeting);
  }
}
