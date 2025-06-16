import {Component, Input} from '@angular/core';
import {Meeting} from "../../../../core/model/meeting/meeting.model";
import {NavGroupComponent} from '../../../elements/nav/nav-group/nav-group.component';
import {NavLinkComponent} from '../../../elements/nav/nav-link/nav-link.component';
import {HasScopeDirective} from '../../../../core/directive/has-scope.directive';
import {IsAdminDirective} from '../../../../core/directive/is-admin.directive';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-nav-event',
    templateUrl: './nav-event.component.html',
    styleUrls: ['./nav-event.component.scss'],
    imports: [NavGroupComponent, NavLinkComponent, HasScopeDirective, IsAdminDirective, TranslateModule]
})
export class NavEventComponent {
  @Input() meeting?: Meeting;
  @Input() meetingId?: string;

}
