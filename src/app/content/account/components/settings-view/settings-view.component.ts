import { Component, OnInit, inject } from '@angular/core';
import {SettingsUserAthleteComponent} from '../settings-user-athlete/settings-user-athlete.component';
import {User, UserService} from '@swimresults/angular';

@Component({
    selector: 'sr-settings-view',
    templateUrl: './settings-view.component.html',
    styleUrls: ['./settings-view.component.scss'],
    imports: [SettingsUserAthleteComponent]
})
export class SettingsViewComponent implements OnInit {
    private userService = inject(UserService);

    user?: User;

    ngOnInit() {
        this.fetchUser();
    }

    fetchUser() {
        this.userService.getUser().subscribe(data => this.user = data);
    }
}
