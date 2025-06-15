import {Component, OnInit} from '@angular/core';
import {WidgetFileSmallComponent} from "../widget-file-small.component";

@Component({
    selector: 'sr-widget-file-start-list-small',
    templateUrl: './../widget-file-small.component.html',
    styleUrls: ['./../widget-file-small.component.scss'],
    standalone: false
})
export class WidgetFileStartListSmallComponent extends WidgetFileSmallComponent implements OnInit {
    ngOnInit() {
        this.fetchFile("START_LIST")
    }
}
