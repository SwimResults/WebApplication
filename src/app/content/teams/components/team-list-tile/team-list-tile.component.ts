import {Component, Input} from '@angular/core';
import {PanelComponent} from '../../../../shared/elements/panel/panel.component';
import {Team} from '@swimresults/angular';

@Component({
    selector: 'sr-team-list-tile',
    templateUrl: './team-list-tile.component.html',
    styleUrls: ['./team-list-tile.component.scss'],
    imports: [PanelComponent]
})
export class TeamListTileComponent {
  @Input() team!: Team;
}
