import {Component, Input} from '@angular/core';
import {IconPanelComponent} from '../../../../shared/elements/icon-panel/icon-panel.component';
import {TranslateModule} from '@ngx-translate/core';
import {MeetingEvent} from '@swimresults/angular';

@Component({
    selector: 'sr-event-list-tile',
    templateUrl: './event-list-tile.component.html',
    styleUrls: ['./event-list-tile.component.scss'],
    imports: [IconPanelComponent, TranslateModule]
})
export class EventListTileComponent {
  @Input() event!: MeetingEvent;
}
