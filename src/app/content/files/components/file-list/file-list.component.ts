import {Component, OnDestroy} from '@angular/core';
import {StorageFile} from "../../../../core/model/meeting/storage-file.model";
import {FileService} from "../../../../core/service/api/meeting/file.service";
import {Subscription} from "rxjs";
import {RouteService} from "../../../../core/service/route.service";

@Component({
  selector: 'sr-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss']
})
export class FileListComponent implements OnDestroy {
  meetingId?: string;
  meetingIdSubscription: Subscription;
  files: StorageFile[] = []

  constructor(
    private routeService: RouteService,
    private fileService: FileService
  ) {
    this.meetingIdSubscription = this.routeService.currentMeetingId.subscribe(data => {
      this.meetingId = data;
      this.fetchFiles();
    })
  }

  fetchFiles() {
    if (!this.meetingId) return;
    this.fileService.getFileListByMeeting(this.meetingId).subscribe(data => {
      this.files = data;
    })
  }

  ngOnDestroy(): void {
    this.meetingIdSubscription.unsubscribe();
  }
}
