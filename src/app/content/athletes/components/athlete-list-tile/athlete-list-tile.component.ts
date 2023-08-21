import {Component, Input} from '@angular/core';
import {Athlete} from "../../../../core/model";

@Component({
  selector: 'sr-athlete-list-tile',
  templateUrl: './athlete-list-tile.component.html',
  styleUrls: ['./athlete-list-tile.component.scss']
})
export class AthleteListTileComponent {
  @Input() athlete!: Athlete;

}
