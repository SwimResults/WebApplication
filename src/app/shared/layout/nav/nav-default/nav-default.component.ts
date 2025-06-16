import {Component} from '@angular/core';
import {NavGroupComponent} from '../../../elements/nav/nav-group/nav-group.component';
import {NavLinkComponent} from '../../../elements/nav/nav-link/nav-link.component';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-nav-default',
    templateUrl: './nav-default.component.html',
    styleUrls: ['./nav-default.component.scss'],
    imports: [NavGroupComponent, NavLinkComponent, TranslateModule]
})
export class NavDefaultComponent {


}
