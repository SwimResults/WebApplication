import {Component, Input} from '@angular/core';

@Component({
  selector: 'sr-livetiming-header',
  templateUrl: './livetiming-header.component.html',
  styleUrls: ['./livetiming-header.component.scss']
})
export class LivetimingHeaderComponent {
  //@Input() event!: MeetingEvent;
  @Input() isLive!: boolean;
}
