import { Injectable, inject } from '@angular/core';
import {BaseService} from "../base.service";
import {ApiService} from "../api.service";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";
import {MeetingNotification, NotificationResponse} from "../../../model/user/notification.model";

@Injectable({
  providedIn: 'root'
})
export class NotificationService extends BaseService {
    private apiService = inject(ApiService);


    constructor() {
        super("NotificationService", environment.api_urls.user_service);
    }

    public sendNotificationsForMeeting(meeting: string, notification: MeetingNotification): Observable<NotificationResponse> {
        return this.apiService.post(this.API_URL, "notification/meet/" + meeting, notification);
    }
}
