import {Component, Input} from '@angular/core';

@Component({
  selector: 'sr-icon-panel',
  templateUrl: './icon-panel.component.html',
  styleUrls: ['./icon-panel.component.scss']
})
export class IconPanelComponent {
  @Input() icon?: string;
  @Input() textContent?: string;
  @Input() style: string = "default";
}
