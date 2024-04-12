import { Component } from '@angular/core';
import {Widget} from "../../../../core/model/user/widget.model";
import {WidgetContainer} from "../../../../core/model/user/widget-container.model";

@Component({
  selector: 'sr-speaker-dashboard',
  templateUrl: './speaker-dashboard.component.html',
  styleUrl: './speaker-dashboard.component.scss'
})
export class SpeakerDashboardComponent {
    widgetContainers: WidgetContainer[] = [];

    constructor() {
        let delayWidget: Widget = {
            _id: "",
            content: "delay",
            size: "SMALL"
        }
        let clockWidget: Widget = {
            _id: "",
            content: "clock",
            size: "MEDIUM"
        }
        let announcementWidget: Widget = {
            _id: "",
            content: "file-announcement",
            size: "SMALL"
        }
        let startListWidget: Widget = {
            _id: "",
            content: "file-start-list",
            size: "SMALL"
        }

        let widgetContainer1: WidgetContainer = {
            order_position: 1,
            widgets: [
                {
                    order_position: 1,
                    widget: clockWidget
                }
            ]
        } as WidgetContainer

        let widgetContainer2: WidgetContainer = {
            order_position: 2,
            widgets: [
                { order_position: 1, widget: announcementWidget },
                { order_position: 2, widget: startListWidget }
            ]
        } as WidgetContainer;

        let widgetContainer3: WidgetContainer = {
            order_position: 3,
            widgets: [
                { order_position: 1, widget: delayWidget }
            ]
        } as WidgetContainer;

        this.widgetContainers.push(widgetContainer1);
        this.widgetContainers.push(widgetContainer2);
        this.widgetContainers.push(widgetContainer3);
    }


}
