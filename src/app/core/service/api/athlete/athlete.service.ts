import { Injectable, inject } from '@angular/core';
import {BaseService} from "../base.service";
import {ApiService} from "../api.service";
import {Observable, shareReplay} from "rxjs";
import {Athlete} from "../../../model";
import {environment} from "../../../../../environments/environment";
import {PagingRequest} from "../../../model/common/paging-request.model";
import { HttpParams } from "@angular/common/http";
import {Certificate} from "../../../model/athlete/certificate.model";

@Injectable({
  providedIn: 'root'
})
export class AthleteService extends BaseService{
  private apiService = inject(ApiService);


  private athleteCache: Map<string, Observable<Athlete>> = new Map<string, Observable<Athlete>>();


  constructor() {
    super('AthleteService', environment.api_urls.athlete_service);
  }

  public getAthletes(paging: PagingRequest): Observable<Athlete[]> {
    return this.apiService.get(this.API_URL, "athlete", paging.toParams());
  }

    getAthletesAmountByMeeting(meeting: string): Observable<number> {
        return this.apiService.getText(this.API_URL, "athlete/meet/" + meeting + "/amount");
    }

  public getAthleteById(id: string): Observable<Athlete> {
    return this.apiService.get(this.API_URL, "athlete/" + id);
  }

  public getAthleteByAliasAndYear(alias: string, year: number): Observable<Athlete> {
    return this.apiService.get(this.API_URL, "athlete/alias_year", new HttpParams().set("alias", alias).set("year", year));
  }

  public getCachedAthleteById(id: string): Observable<Athlete> {
    let athlete: Observable<Athlete> | undefined = this.athleteCache.get(id);
    if (athlete) {
      this.log("load athlete " + id + " from cache", "info");
      return athlete;
    } else {
      athlete = this.getAthleteById(id).pipe(shareReplay(1));
      this.athleteCache.set(id, athlete);
      return athlete;
    }
  }

  public getAthletesByMeeting(id: string, paging: PagingRequest): Observable<Athlete[]> {
    return this.apiService.get(this.API_URL, "athlete/meet/" + id, paging.toParams());
  }

  public getAthletesByTeam(id: string, paging: PagingRequest): Observable<Athlete[]> {
    return this.apiService.get(this.API_URL, "athlete/team/" + id, paging.toParams());
  }

  public getAthletesByTeamAndMeeting(team: string, meeting: string, paging: PagingRequest): Observable<Athlete[]> {
    return this.apiService.get(this.API_URL, "athlete/team/" + team + "/meet/" + meeting, paging.toParams());
  }

  public getCertificatesByAthleteAndMeeting(athleteId: string, meeting: string): Observable<Certificate[]> {
      return this.apiService.get(this.API_URL, `certificate/athlete/${athleteId}/meet/${meeting}`)
  }
}
