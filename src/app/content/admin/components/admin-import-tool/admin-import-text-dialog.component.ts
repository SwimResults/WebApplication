import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ImportFileRequest} from "../../../../core/service/api/import/import-file.service";

@Component({
    selector: 'sr-admin-import-text-dialog',
    templateUrl: './admin-import-text-dialog.component.html',
    styleUrls: ['./admin-import-text-dialog.component.scss']
})
export class AdminImportTextDialog {
    constructor(
        public dialogRef: MatDialogRef<AdminImportTextDialog>,
        @Inject(MAT_DIALOG_DATA) public data: ImportFileRequest,
    ) {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
