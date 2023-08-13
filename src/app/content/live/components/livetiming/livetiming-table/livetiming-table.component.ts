import {Component, Input} from '@angular/core';
import {StartImpl} from "../../../../../core/model/start/start.model";

@Component({
  selector: 'sr-livetiming-table',
  templateUrl: './livetiming-table.component.html',
  styleUrls: ['./livetiming-table.component.scss']
})
export class LivetimingTableComponent {
  @Input()
  starts!: StartImpl[];
}
