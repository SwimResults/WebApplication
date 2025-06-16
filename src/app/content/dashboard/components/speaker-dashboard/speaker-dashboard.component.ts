import {Component} from '@angular/core';
import {Widget} from "../../../../core/model/user/widget.model";
import {WidgetContainer} from "../../../../core/model/user/widget-container.model";
import {WidgetContainerComponent} from '../../../../shared/widget/widget-container/widget-container.component';
import {LivetimingComponent} from '../../../live/components/livetiming/livetiming.component';

@Component({
    selector: 'sr-speaker-dashboard',
    templateUrl: './speaker-dashboard.component.html',
    styleUrl: './speaker-dashboard.component.scss',
    imports: [WidgetContainerComponent, LivetimingComponent]
})
export class SpeakerDashboardComponent {
    widgetContainers: WidgetContainer[] = [];

    constructor() {
        const delayWidget: Widget = {
            _id: "",
            content: "delay",
            size: "SMALL"
        }
        const clockWidget: Widget = {
            _id: "",
            content: "clock",
            size: "MEDIUM"
        }
        const announcementWidget: Widget = {
            _id: "",
            content: "file-announcement",
            size: "SMALL"
        }
        const startListWidget: Widget = {
            _id: "",
            content: "file-start-list",
            size: "SMALL"
        }

        const widgetContainer1: WidgetContainer = {
            order_position: 1,
            widgets: [
                {
                    order_position: 1,
                    widget: clockWidget
                }
            ]
        } as WidgetContainer

        const widgetContainer2: WidgetContainer = {
            order_position: 2,
            widgets: [
                { order_position: 1, widget: announcementWidget },
                { order_position: 2, widget: startListWidget }
            ]
        } as WidgetContainer;

        const widgetContainer3: WidgetContainer = {
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
