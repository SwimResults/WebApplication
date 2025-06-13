import { Injectable } from '@angular/core';
import {BaseService} from "../base.service";
import {ApiService} from "../api.service";
import {environment} from "../../../../../environments/environment";
import {UserReport} from "../../../model/user/user-report.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReportService extends BaseService {

    constructor(
        private apiService: ApiService
    ) {
        super("ReportService", environment.api_urls.user_service);
    }

    public submitReport(report: UserReport): Observable<UserReport> {
        return this.apiService.post(this.API_URL, "report/submit", report);
    }
}
