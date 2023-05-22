import { Injectable } from '@angular/core';
import {BaseService} from "../base.service";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";
import {Start} from "../../../model/start/start.model";
import {ApiService} from "../api.service";

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
}
