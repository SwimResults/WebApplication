import {Component, Input} from '@angular/core';
import {MeetingEvent} from "../../../../core/model/meeting/meeting-event.model";
import {IconPanelComponent} from '../../../../shared/elements/icon-panel/icon-panel.component';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-event-list-tile',
    templateUrl: './event-list-tile.component.html',
    styleUrls: ['./event-list-tile.component.scss'],
    imports: [IconPanelComponent, TranslateModule]
})
export class EventListTileComponent {
  @Input() event!: MeetingEvent;
}
