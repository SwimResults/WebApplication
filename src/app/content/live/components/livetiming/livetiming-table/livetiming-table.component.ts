import {Component, Input} from '@angular/core';
import {LivetimingStartLane} from "../../../../../core/model/start/livetiming-start-lane.model";

@Component({
  selector: 'sr-livetiming-table',
  templateUrl: './livetiming-table.component.html',
  styleUrls: ['./livetiming-table.component.scss']
})
export class LivetimingTableComponent {
  @Input()
  starts!: LivetimingStartLane[];
}
