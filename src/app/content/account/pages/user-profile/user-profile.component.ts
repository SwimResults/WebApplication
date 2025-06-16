import {Component} from '@angular/core';
import {UserProfileViewComponent} from '../../components/user-profile-view/user-profile-view.component';

@Component({
    selector: 'sr-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.scss'],
    imports: [UserProfileViewComponent]
})
export class UserProfileComponent {

}
