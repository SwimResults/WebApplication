import {Component, Input} from '@angular/core';
import {MeetingEvent} from "../../../../core/model/meeting/meeting-event.model";

@Component({
  selector: 'sr-event-list-tile',
  templateUrl: './event-list-tile.component.html',
  styleUrls: ['./event-list-tile.component.scss']
})
export class EventListTileComponent {
  @Input() event!: MeetingEvent;
}
