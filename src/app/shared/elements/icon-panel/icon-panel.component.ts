import {Component, Input} from '@angular/core';
import {MatIcon} from '@angular/material/icon';

@Component({
    selector: 'sr-icon-panel',
    templateUrl: './icon-panel.component.html',
    styleUrls: ['./icon-panel.component.scss'],
    imports: [MatIcon]
})
export class IconPanelComponent {
  @Input() icon?: string;
  @Input() textContent?: string;
  @Input() style: string = "default";
}
