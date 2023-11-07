import { Injectable } from '@angular/core';
import {BaseService} from "../base.service";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";
import {ApiService} from "../api.service";

@Injectable({
  providedIn: 'root'
})
export class ImportFileService extends BaseService {

  constructor(
    private apiService: ApiService
  ) {
    super("ImportFileService", environment.api_urls.import_service)
  }

  public importFile(
    url: string,
    fileExtension: "pdf" | "dsv",
    fileType: "definition" | "start_list" | "result_list",
    exclude: number[],
    include: number[],
    meeting: string
    ): Observable<any> {
    const data = {
      url: url,
      file_extension: fileExtension.toUpperCase(),
      file_type: fileType.toUpperCase(),
      exclude_events: exclude,
      include_events: include,
      meeting: meeting
    }
    return this.apiService.post(this.API_URL, "file", data)
  }
}
