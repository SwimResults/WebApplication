import {Injectable} from '@angular/core';
import {BaseService} from "../base.service";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";
import {ApiService} from "../api.service";

export interface ImportFileRequest {
    url: string,
    text: string,
    file_extension: "pdf" | "dsv" | "pdf_txt",
    file_type: "definition" | "start_list" | "result_list",
    exclude_events: number[],
    include_events: number[],
    meeting: string
}

@Injectable({
    providedIn: 'root'
})
export class ImportFileService extends BaseService {

    constructor(
        private apiService: ApiService
    ) {
        super("ImportFileService", environment.api_urls.import_service)
    }

    public importFile(data: ImportFileRequest): Observable<any> {
        return this.apiService.post(this.API_URL, "file", data)
    }

    public readToPdfBeforeImport(data: ImportFileRequest): Observable<ImportFileRequest> {
        return this.apiService.post(this.API_URL, "pdf_to_text", data)
    }
}
