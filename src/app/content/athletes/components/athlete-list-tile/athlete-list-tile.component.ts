import {Component, Input} from '@angular/core';
import {Athlete} from "../../../../core/model";
import {PanelComponent} from '../../../../shared/elements/panel/panel.component';

@Component({
    selector: 'sr-athlete-list-tile',
    templateUrl: './athlete-list-tile.component.html',
    styleUrls: ['./athlete-list-tile.component.scss'],
    imports: [PanelComponent]
})
export class AthleteListTileComponent {
  @Input() athlete!: Athlete;

}
