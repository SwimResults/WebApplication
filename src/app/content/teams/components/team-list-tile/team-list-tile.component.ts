import {Component, Input} from '@angular/core';
import {Team} from "../../../../core/model";

@Component({
    selector: 'sr-team-list-tile',
    templateUrl: './team-list-tile.component.html',
    styleUrls: ['./team-list-tile.component.scss'],
    standalone: false
})
export class TeamListTileComponent {
  @Input() team!: Team;
}
