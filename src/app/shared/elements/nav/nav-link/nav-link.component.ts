import {Component, Input} from '@angular/core';

@Component({
    selector: 'sr-nav-link',
    templateUrl: './nav-link.component.html',
    styleUrls: ['./nav-link.component.scss'],
    standalone: false
})
export class NavLinkComponent {
  @Input() icon: string = "link";
  @Input() link_title!: string;
  @Input() link!: string;
}
