import { Injectable } from '@angular/core';
import {BaseService} from "../base.service";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";
import {Start} from "../../../model/start/start.model";
import {ApiService} from "../api.service";
import {StartId} from "../../../model/start/start-id.model";
import {Disqualification} from "../../../model/start/disqualification.model";

@Injectable({
  providedIn: 'root'
})
export class StartService extends BaseService {

  constructor(
    private apiService: ApiService
  ) {
    super("StartService", environment.api_urls.start_service);
  }

  getStartsByMeeting(id: string): Observable<Start[]> {
    return this.apiService.get(this.API_URL, "start/meet/" + id);
  }

  getStartsByAthlete(id: string): Observable<Start[]> {
    return this.apiService.get(this.API_URL, "start/athlete/" + id);
  }

  getStartsByMeetingAndAthlete(meeting: string, athlete: string): Observable<Start[]> {
    return this.apiService.get(this.API_URL, "start/meet/" + meeting + "/athlete/" + athlete);
  }

  getStartsByStartIdWithoutLane(startId: StartId): Observable<Start[]> {
    return this.getStartsByMeetingAndEventAndHeat(startId.meeting, startId.event, startId.heat);
  }

  getStartsByMeetingAndEventAndHeat(meeting: string, event: string, heat: number): Observable<Start[]> {
    return this.apiService.get(this.API_URL, "start/meet/" + meeting + "/event/" + event + "/heat/" + heat);
  }

  getStartByStartId(startId: StartId): Observable<Start> {
    return this.getStartByMeetingAndEventAndHeatAndLane(startId.meeting, startId.event, startId.heat, startId.lane ? startId.lane : 0);
  }

  getStartByMeetingAndEventAndHeatAndLane(meeting: string, event: string, heat: number, lane: number): Observable<Start> {
    return this.apiService.get(this.API_URL, "start/meet/" + meeting + "/event/" + event + "/heat/" + heat + "/lane/" + lane);
  }

  getStartById(id: string): Observable<Start> {
    return this.apiService.get(this.API_URL, "start/" + id);
  }

  getDummyStarts(): Start[] {
    let data: Start[] = [];

    data.push(
      {
        "_id": "646b35ba19d08e2ca55dd556",
        "meeting": "IESC22",
        "event": "30",
        "heat_number": 11,
        "heat": {
          "_id": "646b356d19d08e2ca55dd555",
          "meeting": "IESC22",
          "event": "30",
          "number": 11,
          "start_estimation": "2022-12-04T10:28:00Z",
          "start_at": "0001-01-01T00:00:00Z",
          "finished_at": "0001-01-01T00:00:00Z"
        },
        "lane": 1,
        "athlete": "6442587623a3e4b7f8ee0260",
        certified: false,
        rank: 0,
        delay: 0,
        disqualification: {} as Disqualification
      }
    )

    return data;
  }
}
