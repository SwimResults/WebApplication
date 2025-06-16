import {Component, Input} from '@angular/core';
import {HeatImpl} from "../../../core/model/start/heat.model";
import {HeatTimesComponent} from '../heat-times/heat-times.component';

@Component({
    selector: 'sr-panel',
    templateUrl: './panel.component.html',
    styleUrls: ['./panel.component.scss'],
    imports: [HeatTimesComponent]
})
export class PanelComponent {
  @Input() panelTitle?: string;
  @Input() panelSubtitle?: string;
  @Input() heatForTimes?: HeatImpl
}
