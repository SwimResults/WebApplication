import { Injectable, inject } from '@angular/core';
import {BaseService} from "../base.service";
import {environment} from "../../../../../environments/environment";
import {ApiService} from "../api.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EasyWkService extends BaseService {
  private apiService = inject(ApiService);


  constructor() {
    super("EasyWkService", environment.api_urls.import_service);
  }

  private postEasyWk(body: any): Observable<string> {
    return this.apiService.postText(this.API_URL, "easywk/v3", body);
  }

  public newRace(password: string, event: number, heat: number): Observable<string> {
    const body = {
      pwd: password,
      action: "newrace",
      event: event,
      heat: heat
    }
    return this.postEasyWk(body);
  }

  public raceResult(password: string): Observable<string> {
    const body = {
      pwd: password,
      action: "raceresult"
    }
    return this.postEasyWk(body);
  }

  public time(password: string, lane: number, meter: string, time: number, finished: boolean): Observable<string> {
    const body = {
      pwd: password,
      action: "time",
      lane: lane,
      meter: meter,
      time: time,
      finished: finished ? "yes": ""
    }
    return this.postEasyWk(body);
  }

}
