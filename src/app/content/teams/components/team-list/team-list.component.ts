import {Component, Input} from '@angular/core';
import {Team} from "../../../../core/model";
import {TeamListTileComponent} from '../team-list-tile/team-list-tile.component';

@Component({
    selector: 'sr-team-list',
    templateUrl: './team-list.component.html',
    styleUrls: ['./team-list.component.scss'],
    imports: [TeamListTileComponent]
})
export class TeamListComponent {
  @Input() teams!: Team[];
}
