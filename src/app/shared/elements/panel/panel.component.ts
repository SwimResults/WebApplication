import {Component, Input} from '@angular/core';

@Component({
  selector: 'sr-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  @Input() panelTitle?: string;
  @Input() panelSubtitle?: string;
}
