import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {FetchingModel} from "../../../../../core/model/common/fetching.model";
import {Athlete} from "../../../../../core/model";
import {AthleteService, UserService} from "../../../../../core/service/api";
import {RouteService} from "../../../../../core/service/route.service";
import {WidgetTitleComponent} from '../../../widget-title/widget-title.component';
import {WidgetLoginRequiredComponent} from '../../../widget-login-required/widget-login-required.component';
import {WidgetInfoTextComponent} from '../../../widget-info-text/widget-info-text.component';
import {RouterLink} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-widget-favorites',
    templateUrl: './widget-favorites.component.html',
    styleUrls: ['./widget-favorites.component.scss'],
    imports: [WidgetTitleComponent, WidgetLoginRequiredComponent, WidgetInfoTextComponent, RouterLink, TranslateModule]
})
export class WidgetFavoritesComponent implements OnInit, OnDestroy {
    meetingId?: string;
    meetingIdSubscription: Subscription;

    fetching: FetchingModel = {fetching: true} as FetchingModel;

    following: Athlete[] = [];

    constructor(
        private userService: UserService,
        private athleteService: AthleteService,
        private routeService: RouteService
    ) {
        this.meetingIdSubscription = this.routeService.currentMeetingId.subscribe(data => {
            this.meetingId = data;
        })
    }

    ngOnInit() {
        this.fetchFavorites();
    }

    ngOnDestroy() {
        this.meetingIdSubscription.unsubscribe();
    }

    fetchFavorites() {
        this.fetching.fetching = true;
        this.userService.getUser().subscribe(data => {
            if (data.following) {
                for (const follower of data.following) {
                    this.athleteService.getAthleteById(follower.athlete_id).subscribe(ath => {
                        if (!this.meetingId || ath.participation && ath.participation.includes(this.meetingId)) {
                            this.following.push(ath);
                        }
                    })
                }
            }
            this.fetching.fetching = false;
        })
    }

    getInitials(follow: Athlete) {
        const i = follow.name.lastIndexOf(" ")
        return follow.name.charAt(0) + follow.name.charAt(i+1);
    }
}
