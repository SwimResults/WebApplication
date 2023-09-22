import { Injectable } from '@angular/core';
import {BaseService} from "../base.service";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";
import {User} from "../../../model/user/user.model";
import {ApiService} from "../api.service";

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService {

  constructor(
    private apiService: ApiService
  ) {
    super("UserService", environment.api_urls.user_service);
  }

  public getUser(): Observable<User> {
    return this.apiService.get(this.API_URL, "user");
  }

  public setFollowing(athlete_id: string, follow: boolean): Observable<User> {
    return this.apiService.post(this.API_URL, "user/athlete", {athlete: athlete_id, follow: follow});
  }
}
