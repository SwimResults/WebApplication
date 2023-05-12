import { Injectable } from '@angular/core';
import {BaseService} from "../base.service";
import {ApiService} from "../api.service";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";
import {Team} from "../../../model";

@Injectable({
  providedIn: 'root'
})
export class TeamService extends BaseService{

  constructor(
    private apiService: ApiService
  ) {
    super('TeamService', environment.api_urls.athlete_service);
  }

  public getTeams(): Observable<Team[]> {
    return this.apiService.get(this.API_URL, "team");
  }

}
