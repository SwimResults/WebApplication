import { Component, inject } from '@angular/core';

import {
    MAT_DIALOG_DATA,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogRef,
    MatDialogTitle
} from "@angular/material/dialog";
import {UserReport} from "../../../../core/model/user/user-report.model";
import {MatButtonModule} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {ReportService} from "../../../../core/service/api/user/report.service";
import {SnackBarService} from "../../../../core/service/ui/snack-bar.service";
import {AuthService} from "../../../../core/service/auth.service";

export interface ReportSubmissionDialogData {
    report: UserReport;
    subjectName: string;
}

@Component({
    selector: 'sr-report-submission-dialog',
    imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, TranslateModule, MatInputModule, FormsModule],
    templateUrl: './report-submission-dialog.component.html',
    styleUrl: './report-submission-dialog.component.scss'
})
export class ReportSubmissionDialogComponent {
    dialogRef = inject<MatDialogRef<ReportSubmissionDialogComponent>>(MatDialogRef);
    data = inject<ReportSubmissionDialogData>(MAT_DIALOG_DATA);
    private reportService = inject(ReportService);
    private snackBarService = inject(SnackBarService);
    private authService = inject(AuthService);

    constructor() {
        const data = this.data;

        if (!data) {
            this.data = {
                report: {message: ""} as UserReport
            } as ReportSubmissionDialogData;
        }

        this.authService.isAuthenticated.subscribe(isAuthed => this.data.report.anonymous = !isAuthed);
    }

    submitReport() {
        this.reportService.submitReport(this.data.report).subscribe({
            next: _ => {
                this.snackBarService.openAndTranslate("REPORT.DIALOG.SUBMIT.SUCCESS_MESSAGE");
                this.dialogRef.close();
            },
            error: err => {
                console.log(err);
                this.snackBarService.openAndTranslate("REPORT.DIALOG.SUBMIT.FAILURE_MESSAGE");
            }
        })
    }
}
