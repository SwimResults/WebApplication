import {Component, Input} from '@angular/core';
import {WidgetContainer} from "../../../core/model/user/widget-container.model";

@Component({
    selector: 'sr-widget-container',
    templateUrl: './widget-container.component.html',
    styleUrls: ['./widget-container.component.scss'],
    standalone: false
})
export class WidgetContainerComponent {
  @Input() container: WidgetContainer = {} as WidgetContainer;
}
