import {Component, Input} from '@angular/core';
import {WidgetContainer} from "../../../core/model/user/widget-container.model";
import {PanelComponent} from '../../elements/panel/panel.component';
import {WidgetTileComponent} from '../widget-tile/widget-tile.component';

@Component({
    selector: 'sr-widget-container',
    templateUrl: './widget-container.component.html',
    styleUrls: ['./widget-container.component.scss'],
    imports: [PanelComponent, WidgetTileComponent]
})
export class WidgetContainerComponent {
  @Input() container: WidgetContainer = {} as WidgetContainer;
}
