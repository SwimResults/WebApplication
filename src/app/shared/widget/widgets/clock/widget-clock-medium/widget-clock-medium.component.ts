import {Component, OnInit} from '@angular/core';
import {Clock} from "../clock.class";

@Component({
  selector: 'sr-widget-clock-medium',
  templateUrl: './../widget-clock.component.html',
  styleUrls: ['./widget-clock-medium.component.scss', './../widget-clock.component.scss']
})
export class WidgetClockMediumComponent implements OnInit {
    clock: Clock = new Clock();
    ngOnInit(): void {
        this.clock.run();
    }
}
