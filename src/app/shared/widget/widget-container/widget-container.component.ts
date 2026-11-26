import {Component, Input} from '@angular/core';
import {PanelComponent} from '../../elements/panel/panel.component';
import {WidgetTileComponent} from '../widget-tile/widget-tile.component';
import {WidgetContainer} from '@swimresults/angular';

@Component({
    selector: 'sr-widget-container',
    templateUrl: './widget-container.component.html',
    styleUrls: ['./widget-container.component.scss'],
    imports: [PanelComponent, WidgetTileComponent]
})
export class WidgetContainerComponent {
  @Input() container: WidgetContainer = {} as WidgetContainer;
}
