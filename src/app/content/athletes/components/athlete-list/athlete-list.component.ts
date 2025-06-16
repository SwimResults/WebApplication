import {Component, Input} from '@angular/core';
import {Athlete} from "../../../../core/model";
import {AthleteListTileComponent} from '../athlete-list-tile/athlete-list-tile.component';

@Component({
    selector: 'sr-athlete-list',
    templateUrl: './athlete-list.component.html',
    styleUrls: ['./athlete-list.component.scss'],
    imports: [AthleteListTileComponent]
})
export class AthleteListComponent {
  @Input() athletes!: Athlete[];
}
