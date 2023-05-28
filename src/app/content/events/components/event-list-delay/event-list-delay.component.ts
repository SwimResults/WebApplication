import {Component, Input} from '@angular/core';
import {HeatImpl} from "../../../../core/model/start/heat.model";

@Component({
  selector: 'sr-event-list-delay',
  templateUrl: './event-list-delay.component.html',
  styleUrls: ['./event-list-delay.component.scss']
})
export class EventListDelayComponent {
  @Input() heat!: HeatImpl;
}
