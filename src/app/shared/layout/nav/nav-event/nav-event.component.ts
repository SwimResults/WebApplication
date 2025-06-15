import {Component, Input} from '@angular/core';
import {Meeting} from "../../../../core/model/meeting/meeting.model";

@Component({
    selector: 'sr-nav-event',
    templateUrl: './nav-event.component.html',
    styleUrls: ['./nav-event.component.scss'],
    standalone: false
})
export class NavEventComponent {
  @Input() meeting?: Meeting;
  @Input() meetingId?: string;

}
