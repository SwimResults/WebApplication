import {Component, OnInit} from '@angular/core';
import {WidgetFileSmallComponent} from "../widget-file-small.component";

@Component({
    selector: 'sr-widget-file-announcement-small',
    templateUrl: './../widget-file-small.component.html',
    styleUrls: ['./../widget-file-small.component.scss'],
    standalone: false
})
export class WidgetFileAnnouncementSmallComponent extends WidgetFileSmallComponent implements OnInit {
    ngOnInit() {
        this.fetchFile("MEETING_INFO")
    }
}
