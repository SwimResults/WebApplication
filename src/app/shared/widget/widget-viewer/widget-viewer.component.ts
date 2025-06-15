import {Component, Input} from '@angular/core';
import {WidgetContainer} from "../../../core/model/user/widget-container.model";

@Component({
    selector: 'sr-widget-viewer',
    templateUrl: './widget-viewer.component.html',
    styleUrls: ['./widget-viewer.component.scss'],
    standalone: false
})
export class WidgetViewerComponent {
  @Input() widgets: WidgetContainer[] = [];
}
