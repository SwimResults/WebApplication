import {Component, Input} from '@angular/core';

@Component({
    selector: 'sr-page-title',
    templateUrl: './page-title.component.html',
    styleUrls: ['./page-title.component.scss'],
    standalone: false
})
export class PageTitleComponent {
  @Input() title_name!: string;
}
