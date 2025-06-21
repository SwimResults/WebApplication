import { Component, OnDestroy, inject } from '@angular/core';
import {StorageFile} from "../../../../core/model/meeting/storage-file.model";
import {FileService} from "../../../../core/service/api";
import {Subscription} from "rxjs";
import {RouteService} from "../../../../core/service/route.service";
import {FetchingModel} from "../../../../core/model/common/fetching.model";
import {SpinnerComponent} from '../../../../shared/elements/spinner/spinner.component';
import {PanelComponent} from '../../../../shared/elements/panel/panel.component';
import {FileListTileComponent} from '../file-list-tile/file-list-tile.component';
import {NoContentComponent} from '../../../../shared/elements/no-content/no-content.component';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-file-list',
    templateUrl: './file-list.component.html',
    styleUrls: ['./file-list.component.scss'],
    imports: [SpinnerComponent, PanelComponent, FileListTileComponent, NoContentComponent, TranslateModule]
})
export class FileListComponent implements OnDestroy {
  private routeService = inject(RouteService);
  private fileService = inject(FileService);

  meetingId?: string;
  meetingIdSubscription: Subscription;
  files: StorageFile[] = []

  fetchingFiles: FetchingModel = {fetching: false};

  constructor() {
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
