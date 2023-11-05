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

  public getUrlFromMask(mask: string, event: number) {
    let n = (mask.match(/#/g) || []).length;
    mask = mask.replace("#", "$");
    mask = mask.replaceAll("#", "");

    let s = "";
    for (let i = 0; i < n; i++) {
      s += "0";
    }
    s += event;
    mask = mask.replace("$", s.slice(-n));
    return "https://download.swimresults.de" + mask;
  }
}
