import {Component, Input} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-nav-link',
    templateUrl: './nav-link.component.html',
    styleUrls: ['./nav-link.component.scss'],
    imports: [RouterLinkActive, RouterLink, MatIcon, TranslateModule]
})
export class NavLinkComponent {
  @Input() icon: string = "link";
  @Input() link_title!: string;
  @Input() link!: string;
}
