import {Component, OnDestroy} from '@angular/core';
import {StorageFile} from "../../../../core/model/meeting/storage-file.model";
import {FileService} from "../../../../core/service/api";
import {Subscription} from "rxjs";
import {RouteService} from "../../../../core/service/route.service";
import {FetchingModel} from "../../../../core/model/common/fetching.model";

@Component({
    selector: 'sr-file-list',
    templateUrl: './file-list.component.html',
    styleUrls: ['./file-list.component.scss'],
    standalone: false
})
export class FileListComponent implements OnDestroy {
  meetingId?: string;
  meetingIdSubscription: Subscription;
  files: StorageFile[] = []

  fetchingFiles: FetchingModel = {fetching: false};

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
    this.fetchingFiles.fetching = true;
    this.fileService.getFileListByMeeting(this.meetingId).subscribe(data => {
      this.files = data;
      this.fetchingFiles.fetching = false;
    })
  }

  ngOnDestroy(): void {
    this.meetingIdSubscription.unsubscribe();
  }
}
