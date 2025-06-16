import {Component, Input} from '@angular/core';
import {WidgetContainer} from "../../../core/model/user/widget-container.model";
import {WidgetContainerComponent} from '../widget-container/widget-container.component';

@Component({
    selector: 'sr-widget-viewer',
    templateUrl: './widget-viewer.component.html',
    styleUrls: ['./widget-viewer.component.scss'],
    imports: [WidgetContainerComponent]
})
export class WidgetViewerComponent {
  @Input() widgets: WidgetContainer[] = [];
}
