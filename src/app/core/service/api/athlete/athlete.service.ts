import { Injectable } from '@angular/core';
import {BaseService} from "../base.service";
import {ApiService} from "../api.service";
import {Observable} from "rxjs";
import {Athlete} from "../../../model";
import {environment} from "../../../../../environments/environment";
import {PagingRequest} from "../../../model/common/paging-request.model";

@Injectable({
  providedIn: 'root'
})
export class AthleteService extends BaseService{


  constructor(
    private apiService: ApiService
  ) {
    super('AthleteService', environment.api_urls.athlete_service);
  }

  public getAthletes(paging: PagingRequest): Observable<Athlete[]> {
    return this.apiService.get(this.API_URL, "athlete", paging.toParams());
  }

  public getAthleteById(id: string): Observable<Athlete> {
    return this.apiService.get(this.API_URL, "athlete/" + id);
  }

  public getAthletesByMeeting(id: string, paging: PagingRequest): Observable<Athlete[]> {
    return this.apiService.get(this.API_URL, "athlete/meet/" + id, paging.toParams());
  }

  public getAthletesByTeam(id: string, paging: PagingRequest): Observable<Athlete[]> {
    return this.apiService.get(this.API_URL, "athlete/team/" + id, paging.toParams());
  }
}
