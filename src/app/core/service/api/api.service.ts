import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);



  private static formatErrors(error: any) {
    return  throwError(error.error);
  }

  get(url: string, path: string, params?: HttpParams, headers?: HttpHeaders): Observable<any> {
    return this.http.get(url + path, { params, headers: headers})
     .pipe(catchError(ApiService.formatErrors));
  }

    getText(url: string, path: string, params?: HttpParams, headers?: HttpHeaders): Observable<any> {
        return this.http.get(url + path, { params, headers: headers, responseType: "text"})
            .pipe(catchError(ApiService.formatErrors));
    }

  getDownload(url: string, path: string, params?: HttpParams, headers?: HttpHeaders): Observable<any> {
    return this.http.get(url + path, { params, headers: headers, responseType: "blob"})
      .pipe(catchError(ApiService.formatErrors));
  }

  post(url: string, path: string, body: any, params?: HttpParams, headers?: HttpHeaders): Observable<any> {
    const options = {
      headers: headers,
      params: params
    };
    return this.http.post(url + path, body, options)
      .pipe(catchError(ApiService.formatErrors));
  }

  postText(url: string, path: string, body: any, params?: HttpParams, headers?: HttpHeaders): Observable<any> {
    return this.http.post(url + path, body, {
      headers: headers,
      params: params,
      responseType: 'text'
    })
      .pipe(catchError(ApiService.formatErrors));
  }

  put(url: string, path: string, body: any, params?: any, headers?: HttpHeaders): Observable<any> {
    const options = {
      headers: headers,
      params: params
    };
    return this.http.put(url + path, body, options)
      .pipe(catchError(ApiService.formatErrors));
  }

  delete(url: string, path: string, params?: any, headers?: HttpHeaders): Observable<any> {
    const options = {
      headers: headers,
      params: params
    };
    return this.http.delete(url + path, options)
  }

}
