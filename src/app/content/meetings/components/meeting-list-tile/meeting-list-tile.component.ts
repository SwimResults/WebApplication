import {Component, Input} from '@angular/core';
import {MeetingImpl} from "../../../../core/model/meeting/meeting.model";

@Component({
  selector: 'sr-meeting-list-tile',
  templateUrl: './meeting-list-tile.component.html',
  styleUrls: ['./meeting-list-tile.component.scss']
})
export class MeetingListTileComponent {
  @Input() meeting!: MeetingImpl;
}
