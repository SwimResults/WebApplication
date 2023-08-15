import {Component, Input} from '@angular/core';
import {LivetimingStartLane} from "../../../../../core/model/start/livetiming-start-lane.model";
import {StartListTileConfig} from "../../../../../core/model/start/start-list-tile-config.model";
import {MeetingImpl} from "../../../../../core/model/meeting/meeting.model";
import {Start} from "../../../../../core/model/start/start.model";

@Component({
  selector: 'sr-livetiming-table',
  templateUrl: './livetiming-table.component.html',
  styleUrls: ['./livetiming-table.component.scss']
})
export class LivetimingTableComponent {
  @Input() starts!: Start[];

  @Input() meeting!: MeetingImpl

  config: StartListTileConfig = {showAthlete: true, laneAsIcon: true, flatStyle: true, allLanes: true} as StartListTileConfig;

}
