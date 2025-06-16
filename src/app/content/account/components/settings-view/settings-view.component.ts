import {Component, OnInit} from '@angular/core';
import {User} from "../../../../core/model/user/user.model";
import {UserService} from "../../../../core/service/api";
import {SettingsUserAthleteComponent} from '../settings-user-athlete/settings-user-athlete.component';

@Component({
    selector: 'sr-settings-view',
    templateUrl: './settings-view.component.html',
    styleUrls: ['./settings-view.component.scss'],
    imports: [SettingsUserAthleteComponent]
})
export class SettingsViewComponent implements OnInit {
    user?: User;

    constructor(
        private userService: UserService
    ) {
    }

    ngOnInit() {
        this.fetchUser();
    }

    fetchUser() {
        this.userService.getUser().subscribe(data => this.user = data);
    }
}
