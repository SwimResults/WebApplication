import {HttpParams} from "@angular/common/http";

export class PagingRequest {
  limit?: number;
  offset?: number;
  query?: string;


  constructor(limit?: number, offset?: number, query?: string) {
    this.limit = limit;
    this.offset = offset;
    this.query = query;
  }

  toParams(): HttpParams {
    let params = new HttpParams();
    if (this.limit) params = params.set("limit", this.limit);
    if (this.offset) params = params.set("offset", this.offset);
    if (this.query) params = params.set("query", this.query);
    return params;
  }
}
