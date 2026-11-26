import {Component, Input} from '@angular/core';
import {HeatTimesComponent} from '../heat-times/heat-times.component';
import {HeatImpl} from '@swimresults/angular';

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
