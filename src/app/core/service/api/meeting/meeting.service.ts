import { Injectable } from '@angular/core';
import {ApiService} from "../api.service";
import {Observable} from "rxjs";
import {Meeting} from "../../../model/meeting/meeting.model";
import {BaseService} from "../base.service";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MeetingService extends BaseService {

  constructor(
    private apiService: ApiService
  ) {
    super("MeetingService", environment.api_urls.meeting_service);
  }

  public getMeetings(): Observable<Meeting[]> {
    return this.apiService.get(this.API_URL, "meeting");
  }

  public getMeetingByMeetId(id: string): Observable<Meeting> {
    return this.apiService.get(this.API_URL, "meeting/meet_id/" + id);
  }
}
