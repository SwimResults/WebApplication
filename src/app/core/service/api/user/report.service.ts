import { Injectable, inject } from '@angular/core';
import {BaseService} from "../base.service";
import {ApiService} from "../api.service";
import {environment} from "../../../../../environments/environment";
import {UserReport} from "../../../model/user/user-report.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReportService extends BaseService {
    private apiService = inject(ApiService);


    constructor() {
        super("ReportService", environment.api_urls.user_service);
    }

    public getReports(): Observable<UserReport[]> {
        return this.apiService.get(this.API_URL, "report");
    }

    public submitReport(report: UserReport): Observable<UserReport> {
        return this.apiService.post(this.API_URL, "report/submit", report);
    }

    public toggleAcknowledgeReport(reportId: string): Observable<UserReport> {
        return this.apiService.post(this.API_URL, `report/${reportId}/acknowledge`, null);
    }

    public toggleCompleteReport(reportId: string): Observable<UserReport> {
        return this.apiService.post(this.API_URL, `report/${reportId}/complete`, null);
    }
}
