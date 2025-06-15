import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReportService} from "../../../../core/service/api/user/report.service";
import {UserReport} from "../../../../core/model/user/user-report.model";

@Component({
  selector: 'sr-admin-report-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-report-view.component.html',
  styleUrl: './admin-report-view.component.scss'
})
export class AdminReportViewComponent implements OnInit {
    reports: UserReport[] = [];

    constructor(
        private reportService: ReportService
    ) {}

    ngOnInit() {
        this.reportService.getReports().subscribe({
            next: reports => {
                this.reports = reports;
            },
            error: err => {
                console.log(err);
            }
        })
    }
}
