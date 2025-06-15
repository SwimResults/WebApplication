import {Component, OnInit} from '@angular/core';
import {Clock} from "../clock.class";

@Component({
    selector: 'sr-widget-clock-small',
    templateUrl: './../widget-clock.component.html',
    styleUrls: ['./widget-clock-small.component.scss', './../widget-clock.component.scss'],
    standalone: false
})
export class WidgetClockSmallComponent implements OnInit {
    clock: Clock = new Clock();
    ngOnInit(): void {
        this.clock.run();
    }
}
