import { Injectable } from '@angular/core';
import {BaseService} from "../base.service";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";
import {Heat} from "../../../model/start/heat.model";
import {ApiService} from "../api.service";
import {EventHeatInfo} from "../../../model/start/event-heat-info.model";
import {EventListHeats} from "../../../model/start/event-list-heats.model";

@Injectable({
  providedIn: 'root'
})
export class HeatService extends BaseService{

  constructor(
    private apiService: ApiService
  ) {
    super("HeatService", environment.api_urls.start_service);
  }

  getHeatsByMeeting(meeting: string): Observable<Heat[]> {
    return this.apiService.get(this.API_URL, "heat/meet/" + meeting);
  }

  getEventHeatInfo(meeting: string, event: number): Observable<EventHeatInfo> {
    return this.apiService.get(this.API_URL, "heat/meet/" + meeting + "/event/" + event + "/info")
  }


  getCurrentHeat(meeting: string): Observable<Heat> {
    return this.apiService.get(this.API_URL, "heat/meet/" + meeting + "/current");
  }

  getHeatsByMeetingForEventList(meeting: string): Observable<EventListHeats> {
    return this.apiService.get(this.API_URL, "heat/meet/" + meeting + "/event_list");
  }

  updateHeatTime(id: string, time_type: string, time: string): Observable<Heat> {
    const data = {
      time: time,
      type: time_type
    }
    console.log("update times for " + id);
    console.log(data);
    return this.apiService.post(this.API_URL, "heat/" + id + "/time", data);
  }
}
