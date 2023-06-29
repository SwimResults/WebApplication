import {Component, Input} from '@angular/core';
import {HeatImpl} from "../../../core/model/start/heat.model";

@Component({
  selector: 'sr-heat-times',
  templateUrl: './heat-times.component.html',
  styleUrls: ['./heat-times.component.scss']
})
export class HeatTimesComponent {
  @Input() heat!: HeatImpl;

  getLiveTimeClass() {
    // delay
    return (this.heat.getStartAt().getTime() - this.heat.getEstimatedStart().getTime()) <= 4*60*1000 ? 'on-time' : 'late';
  }

  getEstimationTimeClass() {
    return this.heat.hasStartTime() ? '' : 'estimation-no-start'
  }

}
