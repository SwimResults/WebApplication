import { Injectable } from '@angular/core';
import {ApiService} from "../api.service";
import {environment} from "../../../../../environments/environment";
import {BaseService} from "../base.service";
import {Observable} from "rxjs";
import {StorageFile} from "../../../model/meeting/storage-file.model";

@Injectable({
  providedIn: 'root'
})
export class FileService extends BaseService{
  constructor(
    private apiService: ApiService
  ) {
    super("FileService", environment.api_urls.meeting_service);
  }

  public getFileListByMeeting(meeting: string): Observable<StorageFile[]> {
    return this.apiService.get(this.API_URL, "file/meeting/list/" + meeting);
  }
}
