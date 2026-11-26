import { Component, Input, inject } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {BtnComponent} from '../../../../shared/elements/buttons/btn/btn.component';
import {NotificationService, MeetingNotification} from '@swimresults/angular';

@Component({
    selector: 'sr-admin-notification-sender',
    templateUrl: './admin-notification-sender.component.html',
    styleUrl: './admin-notification-sender.component.scss',
    imports: [ReactiveFormsModule, BtnComponent]
})
export class AdminNotificationSenderComponent {
    private notificationService = inject(NotificationService);
    private fb = inject(FormBuilder);

    @Input() meetingId?: string;

    notificationForm: FormGroup;
    log: string[] = []

    constructor() {
        this.notificationForm = this.fb.group({
            subtitle: [],
            message: [],
            type: [],
            level: []
        })
    }



    sendNotification() {
        if (!this.meetingId) return;

        const subtitle = this.notificationForm.value.subtitle;
        const notification: MeetingNotification = {
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
