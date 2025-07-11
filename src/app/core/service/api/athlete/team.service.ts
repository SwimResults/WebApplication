import { Injectable, inject } from '@angular/core';
import {BaseService} from "../base.service";
import {ApiService} from "../api.service";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";
import {Team} from "../../../model";
import {PagingRequest} from "../../../model/common/paging-request.model";
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TeamService extends BaseService{
  private apiService = inject(ApiService);


  constructor() {
    super('TeamService', environment.api_urls.athlete_service);
  }

  public getTeams(paging: PagingRequest): Observable<Team[]> {
    return this.apiService.get(this.API_URL, "team", paging.toParams());
  }

    getTeamsAmountByMeeting(meeting: string): Observable<number> {
        return this.apiService.getText(this.API_URL, "team/meet/" + meeting + "/amount");
    }

  public getTeamById(id: string): Observable<Team> {
    return this.apiService.get(this.API_URL, "team/" + id);
  }

  public getTeamByAlias(alias: string): Observable<Team> {
    return this.apiService.get(this.API_URL, "team/alias", new HttpParams().set("alias", alias));
  }

  public getTeamsByMeeting(id: string, paging: PagingRequest): Observable<Team[]> {
    return this.apiService.get(this.API_URL, "team/meet/" + id, paging.toParams());
  }

}
