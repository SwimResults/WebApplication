import {Component, Input} from '@angular/core';
import {StartListTileConfig} from "../../../../../core/model/start/start-list-tile-config.model";
import {MeetingImpl} from "../../../../../core/model/meeting/meeting.model";
import {Start} from "../../../../../core/model/start/start.model";
import {StartListComponent} from '../../../../starts/components/start-list/start-list.component';

@Component({
    selector: 'sr-livetiming-table',
    templateUrl: './livetiming-table.component.html',
    styleUrls: ['./livetiming-table.component.scss'],
    imports: [StartListComponent]
})
export class LivetimingTableComponent {
  @Input() starts!: Start[];

  @Input() meeting!: MeetingImpl
  @Input() config!: StartListTileConfig;

}
