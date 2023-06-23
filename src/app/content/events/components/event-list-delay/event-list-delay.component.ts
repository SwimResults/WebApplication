import {Component, Input} from '@angular/core';
import {HeatImpl} from "../../../../core/model/start/heat.model";

@Component({
  selector: 'sr-event-list-delay',
  templateUrl: './event-list-delay.component.html',
  styleUrls: ['./event-list-delay.component.scss']
})
export class EventListDelayComponent {
  @Input() heat!: HeatImpl;

  getLiveTimeClass() {
            // delay
    return (this.heat.getStartAt().getTime() - this.heat.getEstimatedStart().getTime()) <= 4*60*1000 ? 'on-time' : 'late';
  }

  getEstimationTimeClass() {
    console.log(this.heat.getStartAtTime())
    return this.heat.getStartAt().getTime() > 0 ? '' : 'estimation-no-start'
  }

}
