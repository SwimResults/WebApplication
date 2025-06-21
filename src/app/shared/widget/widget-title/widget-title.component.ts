import {Component, Input} from '@angular/core';
import {MatIcon} from '@angular/material/icon';

@Component({
    selector: 'sr-widget-title',
    templateUrl: './widget-title.component.html',
    styleUrls: ['./widget-title.component.scss'],
    imports: [MatIcon]
})
export class WidgetTitleComponent {
    @Input() icon!: string;
}
