import { Injectable, inject } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {
    ReportSubmissionDialogComponent,
    ReportSubmissionDialogData
} from "../../content/report/components/report-submission-dialog/report-submission-dialog.component";
import {UserReport, UserReportSubjectType} from "../model/user/user-report.model";

@Injectable({
    providedIn: 'root'
})
export class ReportDialogService {
    private matDialog = inject(MatDialog);


    openReportDialog(subject?: string, subjectType?: UserReportSubjectType, subjectName?: string) {
        this.matDialog.open(ReportSubmissionDialogComponent, {
            width: '95%',
            maxWidth: '950px',
            data: {
                report: {message: "", subject_id: subject, subject_type: subjectType} as UserReport,
                subjectName: subjectName
            } as ReportSubmissionDialogData
        })
    }

}
