import {Component, Input} from '@angular/core';
import {HeatImpl} from "../../../core/model/start/heat.model";

@Component({
  selector: 'sr-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  @Input() panelTitle?: string;
  @Input() panelSubtitle?: string;
  @Input() heatForTimes?: HeatImpl
}
