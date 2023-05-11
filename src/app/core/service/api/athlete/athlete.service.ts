import { Injectable } from '@angular/core';
import {BaseService} from "../base.service";
import {ApiService} from "../api.service";
import {Observable} from "rxjs";
import {Athlete} from "../../../model";
import {environment} from "../../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AthleteService extends BaseService{


  constructor(
    private apiService: ApiService
  ) {
    super('AthleteService', environment.api_urls.athlete_service);
  }

  public getAthletes(): Observable<Athlete[]> {
    return this.apiService.get(this.API_URL, "athlete");
  }

  public getAthleteById(id: string): Observable<Athlete> {
    return this.apiService.get(this.API_URL, "athlete/" + id);
  }

  public getAthletesByMeeting(id: string): Observable<Athlete[]> {
    return this.apiService.get(this.API_URL, "athlete/meet/" + id);
  }
}
