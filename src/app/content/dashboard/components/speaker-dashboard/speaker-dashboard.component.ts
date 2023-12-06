import { Component } from '@angular/core';
import {Widget} from "../../../../core/model/user/widget.model";
import {WidgetContainer} from "../../../../core/model/user/widget-container.model";
import {WidgetTile} from "../../../../core/model/user/widget-tile.model";

@Component({
  selector: 'sr-speaker-dashboard',
  templateUrl: './speaker-dashboard.component.html',
  styleUrl: './speaker-dashboard.component.scss'
})
export class SpeakerDashboardComponent {
    delayWidget: Widget = {
        _id: "",
        content: "delay",
        size: "SMALL"
    }
    clockWidget: Widget = {
        _id: "",
        content: "clock",
        size: "MEDIUM"
    }
    announcementWidget: Widget = {
        _id: "",
        content: "file-announcement",
        size: "SMALL"
    }
    startListWidget: Widget = {
        _id: "",
        content: "file-start-list",
        size: "SMALL"
    }
    widgets: WidgetContainer = {
        order_position: 1,
        widgets: [
            {
                order_position: 1,
                widget: this.clockWidget
            },
            {
                order_position: 2,
                widget: this.delayWidget
            },
            {
                order_position: 3,
                widget: this.announcementWidget
            },
            {
                order_position: 4,
                widget: this.startListWidget
            }
        ]
    } as WidgetContainer;

}
