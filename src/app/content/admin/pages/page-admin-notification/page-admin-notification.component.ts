import {Component} from '@angular/core';
import {
    AdminNotificationViewComponent
} from '../../components/admin-notification-view/admin-notification-view.component';

@Component({
    selector: 'sr-page-admin-notification',
    templateUrl: './page-admin-notification.component.html',
    styleUrl: './page-admin-notification.component.scss',
    imports: [AdminNotificationViewComponent]
})
export class PageAdminNotificationComponent {

}
