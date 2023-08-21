import {Component, Input} from '@angular/core';
import {MeetingEvent} from "../../../../../core/model/meeting/meeting-event.model";

@Component({
  selector: 'sr-livetiming-header',
  templateUrl: './livetiming-header.component.html',
  styleUrls: ['./livetiming-header.component.scss']
})
export class LivetimingHeaderComponent {
  @Input() event!: MeetingEvent;
}
