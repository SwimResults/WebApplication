import {Component, Input} from '@angular/core';
import {NotificationService} from "../../../../core/service/api/user/notification.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {MeetingNotification, Notification} from "../../../../core/model/user/notification.model";

@Component({
  selector: 'sr-admin-notification-sender',
  templateUrl: './admin-notification-sender.component.html',
  styleUrl: './admin-notification-sender.component.scss'
})
export class AdminNotificationSenderComponent {
    @Input() meetingId?: string;

    notificationForm: FormGroup;
    log: string[] = []

    constructor(
        private notificationService: NotificationService,
        private fb: FormBuilder
    ) {
        this.notificationForm = this.fb.group({
            subtitle: [],
            message: [],
            type: [],
            level: []
        })
    }



    sendNotification() {
        if (!this.meetingId) return;

        let subtitle = this.notificationForm.value.subtitle;
        let notification: MeetingNotification = {
            subtitle: subtitle,
            message: this.notificationForm.value.message,
            message_type: this.notificationForm.value.type,
            interruption_level: this.notificationForm.value.level,
        }

        this.notificationService.sendNotificationsForMeeting(this.meetingId, notification).subscribe(response => {
            this.log.push("sent notification '" + subtitle + "' to '" + response.user_count + "' accounts (" + response.success_count + "/" + response.notification_user_count + " devices)")
        })
    }
}
