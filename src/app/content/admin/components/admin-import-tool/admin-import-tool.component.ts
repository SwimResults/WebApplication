import { Component, Input, OnInit, inject } from '@angular/core';
import {EventService, FileService} from "../../../../core/service/api";
import {MeetingImpl} from "../../../../core/model/meeting/meeting.model";
import {MeetingEvent} from "../../../../core/model/meeting/meeting-event.model";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ImportFileRequest, ImportFileService} from "../../../../core/service/api/import/import-file.service";
import {MatDialog} from "@angular/material/dialog";
import {AdminImportTextDialogComponent} from "./admin-import-text-dialog.component";
import {BtnComponent} from '../../../../shared/elements/buttons/btn/btn.component';
import {MatIcon} from '@angular/material/icon';
import {PanelComponent} from '../../../../shared/elements/panel/panel.component';
import {MatRadioButton, MatRadioGroup} from '@angular/material/radio';
import {TranslateModule} from '@ngx-translate/core';

interface FileList {
    name: string,
    url: string,
    event: MeetingEvent,
    exists: boolean
}

@Component({
    selector: 'sr-admin-import-tool',
    templateUrl: './admin-import-tool.component.html',
    styleUrls: ['./admin-import-tool.component.scss'],
    imports: [BtnComponent, MatIcon, PanelComponent, ReactiveFormsModule, MatRadioGroup, MatRadioButton, TranslateModule]
})
export class AdminImportToolComponent implements OnInit {
    private eventService = inject(EventService);
    private fileService = inject(FileService);
    private importService = inject(ImportFileService);
    private fb = inject(FormBuilder);
    private dialog = inject(MatDialog);

    @Input() meetingId?: string;
    @Input() meeting?: MeetingImpl;

    fileTypeList = [
        {name: 'DSV', value: "dsv"},
        {name: 'PDF', value: "pdf"},
        {name: 'TXT', value: "pdf_txt"},
    ];

    currentFileType: string = ""
    currentFile?: FileList;

    events: MeetingEvent[] = [];
    files: FileList[] = [];

    importForm: FormGroup

    runningImport: boolean = false;
    runningCertificationToggle: boolean = false;

    constructor() {
        this.importForm = this.fb.group({
            url: [],
            fileType: [],
            listType: [],
            exclude: [],
            include: []
        })
    }

    ngOnInit() {
        this.fetchEvents();
    }

    fetchEvents() {
        if (this.meetingId) {
            this.eventService.getEventsByMeeting(this.meetingId).subscribe(data => {
                this.events = data;
                this.updateFileList()
            })
        }
    }

    updateFileList() {
        if (!this.meeting) return;
        this.files = [];
        for (const event of this.events) {
            const file = {
                url: this.fileService.getUrlFromMask(this.meeting.data.ftp_result_list_mask, event.number),
                name: "WK " + event.number,
                event: event,
                exists: false
            }
            //this.fileService.checkExistence(file.url).then(exists => file.exists = exists);
            this.files.push(file);
        }
    }

    onFileTypeChange(v: string) {
        this.currentFileType = v;
    }

    onSelectFile(file: FileList) {
        this.currentFile = file;
    }


    onImport() {
        if (!this.meetingId) return;
        this.runningImport = true;

        console.log("starting import...");

        const excludes: number[] = [];
        if (this.importForm.value.exclude) {
            const exs = this.importForm.value.exclude.split(",");
            for (const ex of exs) {
                excludes.push(Number(ex))
            }
        }


        const includes: number[] = [];
        if (this.importForm.value.include) {
            const incs = this.importForm.value.include.split(",");
            for (const inc of incs) {
                includes.push(Number(inc))
            }
        }

        const data: ImportFileRequest = {
            url: this.importForm.value.url,
            text: "",
            file_extension: this.importForm.value.fileType.toUpperCase(),
            file_type: this.importForm.value.listType.toUpperCase(),
            exclude_events: excludes,
            include_events: includes,
            meeting: this.meetingId
        }

        if (this.importForm.value.fileType === 'pdf_txt') {
            this.importService.readToPdfBeforeImport(data).subscribe({
                next: (newData => {
                    console.log("successfully send pdf to text for '" + this.importForm.value.url + "'")
                    console.log(newData.text)

                    const dialogRef = this.dialog.open(AdminImportTextDialogComponent, {
                        data: newData,
                        width: '80%'
                    });

                    dialogRef.afterClosed().subscribe(result => {
                        console.log('The dialog was closed');

                        this.importService.importFile(result).subscribe({
                            next: (_ => {
                                console.log("successfully send import for text")
                                this.runningImport = false;
                            }),
                            error: err => {
                                console.error(err);
                                this.runningImport = false;
                            }
                        })
                    });
                }),
                error: err => {
                    console.error(err);
                    this.runningImport = false;
                }
            })
        } else {
            this.importService.importFile(data).subscribe({
                next: (_ => {
                    console.log("successfully send import for '" + this.importForm.value.url + "'")
                    this.runningImport = false;
                }),
                error: err => {
                    console.error(err);
                    this.runningImport = false;
                }
            })
        }

    }

    setCurrentFileForImport() {
        if (this.currentFile) {
            this.onFileTypeChange("pdf");
            this.importForm.setValue({
                url: this.currentFile.url,
                fileType: "pdf",
                listType: "result_list",
                exclude: "",
                include: this.currentFile.event.number
            })
        }
    }

    openCurrentFile() {
        if (this.currentFile && this.currentFile.url) {
            window.open(this.currentFile.url, "_blank")
        }
    }

    toggleCurrentFileEventCertification() {
        if (this.currentFile && this.meetingId) {
            this.runningCertificationToggle = true;
            this.eventService.updateEventCertification(this.meetingId, this.currentFile?.event.number).subscribe({
                next: (_ => {
                    this.runningCertificationToggle = false;
                    this.fetchEvents();
                }),
                error: (_ => {
                    this.runningCertificationToggle = false;
                })
            });
        }
    }
}

