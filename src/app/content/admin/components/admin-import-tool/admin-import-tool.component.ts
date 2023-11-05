import {Component, Input, OnInit} from '@angular/core';
import {EventService, FileService} from "../../../../core/service/api";
import {MeetingImpl} from "../../../../core/model/meeting/meeting.model";
import {MeetingEvent} from "../../../../core/model/meeting/meeting-event.model";

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
  currentFile?: number;

  events: MeetingEvent[] = [];
  files: FileList[] = [];

  constructor(
    private eventService: EventService,
    private fileService: FileService
  ) {
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

  onSelectFile(event_number: number) {
    this.currentFile = event_number;
  }
}
