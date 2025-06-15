import {Component, Input} from '@angular/core';

@Component({
    selector: 'sr-widget-title',
    templateUrl: './widget-title.component.html',
    styleUrls: ['./widget-title.component.scss'],
    standalone: false
})
export class WidgetTitleComponent {
    @Input() icon!: string;
}
