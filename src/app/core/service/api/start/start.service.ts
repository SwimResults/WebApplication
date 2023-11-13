import { Injectable } from '@angular/core';
import {BaseService} from "../base.service";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";
import {Start} from "../../../model/start/start.model";
import {ApiService} from "../api.service";
import {StartId} from "../../../model/start/start-id.model";

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

  getStartsAmountByMeeting(meeting: string): Observable<number> {
      return this.apiService.getText(this.API_URL, "start/meet/" + meeting + "/amount");
  }

  getStartsByAthlete(id: string): Observable<Start[]> {
    return this.apiService.get(this.API_URL, "start/athlete/" + id);
  }

  getStartsByMeetingAndAthlete(meeting: string, athlete: string): Observable<Start[]> {
    return this.apiService.get(this.API_URL, "start/meet/" + meeting + "/athlete/" + athlete);
  }

  getStartsByMeetingAndEvent(meeting: string, event: number): Observable<Start[]> {
    return this.apiService.get(this.API_URL, "start/meet/" + meeting + "/event/" + event);
  }

  getStartsByStartIdWithoutLane(startId: StartId): Observable<Start[]> {
    return this.getStartsByMeetingAndEventAndHeat(startId.meeting, startId.event, startId.heat);
  }

  getStartsByMeetingAndEventAndHeat(meeting: string, event: number, heat: number): Observable<Start[]> {
    return this.apiService.get(this.API_URL, "start/meet/" + meeting + "/event/" + event + "/heat/" + heat);
  }

  getStartByStartId(startId: StartId): Observable<Start> {
    return this.getStartByMeetingAndEventAndHeatAndLane(startId.meeting, startId.event, startId.heat, startId.lane ? startId.lane : 0);
  }

  getStartByMeetingAndEventAndHeatAndLane(meeting: string, event: number, heat: number, lane: number): Observable<Start> {
    return this.apiService.get(this.API_URL, "start/meet/" + meeting + "/event/" + event + "/heat/" + heat + "/lane/" + lane);
  }

  getCurrentStarts(meeting: string): Observable<Start[]> {
    return this.apiService.get(this.API_URL, "start/meet/" + meeting + "/current");
  }

  getStartById(id: string): Observable<Start> {
    return this.apiService.get(this.API_URL, "start/" + id);
  }
}
