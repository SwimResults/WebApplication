import { Injectable } from '@angular/core';
import {ApiService} from "../api.service";
import {environment} from "../../../../../environments/environment";
import {BaseService} from "../base.service";
import {Observable} from "rxjs";
import {Dashboard} from "../../../model/user/dashboard.model";
import { HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DashboardService extends BaseService {

    constructor(
        private apiService: ApiService
    ) {
        super("DashboardService", environment.api_urls.user_service);
    }

    public getDashboard(defaultDashboard: boolean, meetingState: string): Observable<Dashboard> {
        return this.apiService.get(
            this.API_URL,
            "dashboard" + (defaultDashboard ? "/default" : ""),
            new HttpParams().set("meeting_state", meetingState)
            );
    }
}
