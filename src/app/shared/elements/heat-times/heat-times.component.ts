import {Component, Input} from '@angular/core';
import {HeatImpl} from "../../../core/model/start/heat.model";

@Component({
  selector: 'sr-heat-times',
  templateUrl: './heat-times.component.html',
  styleUrls: ['./heat-times.component.scss']
})
export class HeatTimesComponent {
  @Input() heat!: HeatImpl;
  @Input() orientation: "horizontal" | "vertical" = "vertical";

  getLiveTimeClass() {
    // delay
    return (this.heat.getDelay()) <= 4*60*1000 ? 'on-time' : 'late';
  }

  getEstimationTimeClass() {
    return this.heat.hasStartDelayEstimationTime() ? '' : 'estimation-no-start'
  }

}
