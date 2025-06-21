import {Component, Input} from '@angular/core';
import {StartListTileConfig} from "../../../../../core/model/start/start-list-tile-config.model";
import {MeetingImpl} from "../../../../../core/model/meeting/meeting.model";
import {Start} from "../../../../../core/model/start/start.model";
import {StartListComponent} from '../../../../starts';
import {AthleteRelation} from "../../../../../core/model/user/follower.model";

@Component({
    selector: 'sr-livetiming-table',
    templateUrl: './livetiming-table.component.html',
    styleUrls: ['./livetiming-table.component.scss'],
    imports: [StartListComponent]
})
export class LivetimingTableComponent {
  @Input() starts!: Start[];
  @Input() athletes!: AthleteRelation[]

  @Input() meeting!: MeetingImpl
  @Input() config!: StartListTileConfig;

}
