import {inject, Injectable, OnDestroy} from '@angular/core';
import {ReplaySubject, Subscription} from "rxjs";
import {User} from "../model/user/user.model";
import {UserService} from "./api";
import {AuthService} from "./auth.service";
import {AthleteRelation, AthleteRelationType} from "../model/user/follower.model";

@Injectable({
  providedIn: 'root'
})
export class UserDataService implements OnDestroy {
    private userService = inject(UserService);
    private authService = inject(AuthService);

    private userSubject = new ReplaySubject<User>(1);
    public user = this.userSubject.asObservable();

    private followingSubject = new ReplaySubject<AthleteRelation[]>(1);
    public following = this.followingSubject.asObservable();

    isAuthedSubscription: Subscription;

    constructor() {
        this.followingSubject.next([]);
        this.isAuthedSubscription = this.authService.isAuthenticated.subscribe(isAuthed => {
            if (isAuthed) {
                this.refreshUserData();
            }
        })
    }

    refreshUserData() {
        this.userService.getUser().subscribe(user => {
            this.userSubject.next(user);

            const athletes: AthleteRelation[] = [];
            if (user.own_athlete_id) athletes.push({athleteId: user.own_athlete_id, type: AthleteRelationType.SELF} as AthleteRelation);
            for (const follower of user.following) {
                athletes.push({athleteId: follower.athlete_id, type: AthleteRelationType.FOLLOW} as AthleteRelation);
            }

            this.followingSubject.next(athletes);
        });
    }

    ngOnDestroy(): void {
        this.isAuthedSubscription.unsubscribe();
    }
}
