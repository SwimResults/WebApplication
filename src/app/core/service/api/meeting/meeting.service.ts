import { Injectable } from '@angular/core';
import {ApiService} from "../api.service";
import {Observable, shareReplay} from "rxjs";
import {Meeting} from "../../../model/meeting/meeting.model";
import {BaseService} from "../base.service";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MeetingService extends BaseService {

  private meetingCache: Map<string, Observable<Meeting>> = new Map<string, Observable<Meeting>>();

  constructor(
    private apiService: ApiService
  ) {
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
}
