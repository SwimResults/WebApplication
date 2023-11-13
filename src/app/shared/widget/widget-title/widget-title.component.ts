import {Component, Input} from '@angular/core';

@Component({
  selector: 'sr-widget-title',
  templateUrl: './widget-title.component.html',
  styleUrls: ['./widget-title.component.scss']
})
export class WidgetTitleComponent {
    @Input() icon!: string;
}
