import {Component, Input, OnInit} from '@angular/core';
import {EventService, FileService} from "../../../../core/service/api";
import {MeetingImpl} from "../../../../core/model/meeting/meeting.model";
import {MeetingEvent} from "../../../../core/model/meeting/meeting-event.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ImportFileService} from "../../../../core/service/api/import/import-file.service";

interface FileList {
  name: string,
  url: string,
  event: MeetingEvent
}

@Component({
  selector: 'sr-admin-import-tool',
  templateUrl: './admin-import-tool.component.html',
  styleUrls: ['./admin-import-tool.component.scss']
})
export class AdminImportToolComponent implements OnInit {
  @Input() meetingId?: string;
  @Input() meeting?: MeetingImpl;

  fileTypeList = [
    {name: 'DSV', value: "dsv"},
    {name: 'PDF', value: "pdf"},
  ];

  currentFileType: string = ""
  currentFile?: FileList;

  events: MeetingEvent[] = [];
  files: FileList[] = [];

  importForm: FormGroup

  constructor(
    private eventService: EventService,
    private fileService: FileService,
    private importService: ImportFileService,
    private fb: FormBuilder
  ) {
    this.importForm = this.fb.group({
      url: [],
      fileType: [],
      listType: []
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
      this.files.push({
        url: this.fileService.getUrlFromMask(this.meeting.data.ftp_result_list_mask, event.number),
        name: "WK " + event.number,
        event: event
      });
    }
  }

  onFileTypeChange(v: string) {
    this.currentFileType = v;
  }

  onSelectFile(file: FileList) {
    this.currentFile = file;
  }


  onImport() {
    if (!this.currentFile) return;
    if (!this.meetingId) return;
    this.importService.importFile(
      this.importForm.value.url,
      this.importForm.value.fileType,
      this.importForm.value.listType,
      this.meetingId
    ).subscribe(_ => {
      console.log("successfully send import for '" + this.importForm.value.url + "'")
    })
  }

  setCurrentFileForImport() {
    if (this.currentFile) {
      this.onFileTypeChange("pdf");
      this.importForm.setValue({
        url: this.currentFile.url,
        fileType: "pdf",
        listType: "result",
      })
    }
  }

  openCurrentFile() {
    if (this.currentFile && this.currentFile.url) {
      window.open(this.currentFile.url, "_blank")
    }
  }
}
