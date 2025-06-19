import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReportService} from "../../../../core/service/api/user/report.service";
import {UserReport, UserReportSubjectType} from "../../../../core/model/user/user-report.model";
import {RouterLink} from "@angular/router";
import {Subscription} from "rxjs";
import {RouteService} from "../../../../core/service/route.service";
import {BtnComponent} from "../../../../shared/elements/buttons/btn/btn.component";
import {MatIcon} from "@angular/material/icon";

@Component({
    selector: 'sr-admin-report-view',
    imports: [CommonModule, RouterLink, BtnComponent, MatIcon],
    templateUrl: './admin-report-view.component.html',
    styleUrl: './admin-report-view.component.scss'
})
export class AdminReportViewComponent implements OnInit, OnDestroy {
    private reportService = inject(ReportService);
    private routeService = inject(RouteService);

    reports: UserReport[] = [];

    meetingIdSubscription: Subscription;
    meetingId?: string;

    protected readonly UserReportSubjectType = UserReportSubjectType;

    constructor() {
        this.meetingIdSubscription = this.routeService.currentMeetingId.subscribe(data => {
            this.meetingId = data;
        })
    }

    ngOnInit() {
        this.reportService.getReports().subscribe({
            next: reports => {
                this.reports = reports;
                this.sortReports();
            },
            error: err => {
                console.log(err);
            }
        })
    }

    ngOnDestroy() {
        this.meetingIdSubscription.unsubscribe();
    }

    acknowledgeReport(report: UserReport) {
        this.reportService.toggleAcknowledgeReport(report._id).subscribe(this.handleReportUpdate())
    }

    completeReport(report: UserReport) {
        this.reportService.toggleCompleteReport(report._id).subscribe(this.handleReportUpdate())
    }

    private handleReportUpdate() {
        return {
            next: (updatedReport: UserReport) => {
                console.log(updatedReport);
                const index = this.reports.findIndex(r => r._id === updatedReport._id);
                if (index !== -1) {
                    this.reports[index] = updatedReport;
                    this.sortReports();
                }
            }
        };
    }

    private sortReports() {
        this.reports.sort((a, b) => {
            // Sort by completed: true first
            if (a.completed !== b.completed) {
                return a.completed ? 1 : -1;
            }

            // Then by acknowledged: true first
            if (a.acknowledged !== b.acknowledged) {
                return a.acknowledged ? 1 : -1;
            }

            // Then by added_at: latest date first
            return new Date(b.added_at).getTime() - new Date(a.added_at).getTime();
        });
    }
}
