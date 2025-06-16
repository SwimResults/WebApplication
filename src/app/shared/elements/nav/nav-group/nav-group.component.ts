import {Component, Input} from '@angular/core';

@Component({
    selector: 'sr-nav-group',
    templateUrl: './nav-group.component.html',
    styleUrls: ['./nav-group.component.scss']
})
export class NavGroupComponent {
  @Input() title?: string;
}
