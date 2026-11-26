import {Component, Input} from '@angular/core';
import {StartListComponent} from '../../../../starts';
import {StartListTileConfig, MeetingImpl, Start, AthleteRelation} from '@swimresults/angular';

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
