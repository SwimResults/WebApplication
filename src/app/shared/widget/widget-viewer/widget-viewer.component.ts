import {Component, Input} from '@angular/core';
import {WidgetContainerComponent} from '../widget-container/widget-container.component';
import {WidgetContainer} from '@swimresults/angular';

@Component({
    selector: 'sr-widget-viewer',
    templateUrl: './widget-viewer.component.html',
    styleUrls: ['./widget-viewer.component.scss'],
    imports: [WidgetContainerComponent]
})
export class WidgetViewerComponent {
  @Input() widgets: WidgetContainer[] = [];
}
