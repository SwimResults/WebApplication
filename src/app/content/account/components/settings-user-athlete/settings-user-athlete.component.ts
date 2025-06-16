import {Component, OnInit} from '@angular/core';
import {IListTile} from "../../../../core/model/list/list-tile.model";
import {Athlete} from "../../../../core/model";
import {AthleteService, UserService} from "../../../../core/service/api";
import {RefreshListRequest} from "../../../../core/model/list/refresh-list-request.model";
import {FetchingModel} from "../../../../core/model/common/fetching.model";
import {ListConfig} from "../../../../core/model/list/list-config.model";
import {User} from "../../../../core/model/user/user.model";
import {UserAthleteListTile} from "../../../../core/model/list/user-athlete-list-tile.model";
import {ListViewComponent} from '../../../../shared/elements/list/list-view/list-view.component';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-settings-user-athlete',
    templateUrl: './settings-user-athlete.component.html',
    styleUrls: ['./settings-user-athlete.component.scss'],
    imports: [ListViewComponent, TranslateModule]
})
export class SettingsUserAthleteComponent implements OnInit {
    user?: User;

    userAthlete?: Athlete;
    listUserAthlete: IListTile[] = [];

    athletes: Athlete[] = [];
    listAthletes: IListTile[] = [];
    fetchingAthletes: FetchingModel = {fetching: false};

    config: ListConfig = {showSetUserAthleteButton: true, showUnsetUserAthleteButton: false, showMoreButton: false};
    configUserAthlete: ListConfig = {showUnsetUserAthleteButton: true, showMoreButton: false, showSetUserAthleteButton: false};

    constructor(
        private athleteService: AthleteService,
        private userService: UserService
    ) {
    }

    ngOnInit() {
        this.fetchUser();
    }

    fetchUser() {
        this.userService.getUser().subscribe(data => {
            console.log("fetching athlete for user: " + data.keycloak_id);
            this.user = data;
            if (this.user && this.user.own_athlete_id) {
                this.athleteService.getAthleteById(this.user.own_athlete_id).subscribe(data => {
                    this.userAthlete = data;
                    this.listUserAthlete = [];
                    this.listUserAthlete.push(new UserAthleteListTile(this.userAthlete));
                })
            }
        });
    }

    fetchAthletes(request: RefreshListRequest) {
        this.fetchingAthletes.fetching = true;
        if (request.paging.offset == 0) {
            this.athletes = [];
            this.listAthletes = [];
            this.fetchUser(); // update user on list update;
        }
        this.athleteService.getAthletes(request.paging).subscribe(data => {
            this.appendAthletes(data);
            this.fetchingAthletes.fetching = false;
        })
    }

    appendAthletes(athletes: Athlete[]) {
        if (!athletes) return;
        this.athletes.concat(athletes);
        athletes.forEach(athlete => {
            this.listAthletes.push(new UserAthleteListTile(athlete));
        })
    }
}
