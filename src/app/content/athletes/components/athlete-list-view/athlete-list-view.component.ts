import {Component, Input} from '@angular/core';
import {Athlete} from "../../../../core/model";
import {AthleteService, UserService} from "../../../../core/service/api";
import {Meeting} from "../../../../core/model/meeting/meeting.model";
import {IListTile} from "../../../../core/model/list/list-tile.model";
import {RefreshListRequest} from "../../../../core/model/list/refresh-list-request.model";
import {AthleteListTile} from "../../../../core/model/list/athlete-list-tile.model";
import {FetchingModel} from "../../../../core/model/common/fetching.model";

@Component({
    selector: 'sr-athlete-list-view',
    templateUrl: './athlete-list-view.component.html',
    styleUrls: ['./athlete-list-view.component.scss'],
    standalone: false
})
export class AthleteListViewComponent {
  @Input() meeting?: Meeting;
  @Input() meetingId: string | undefined;
  athletes: Athlete[] = [];
  listAthletes: IListTile[] = [];
  following: Athlete[] = [];
  listFollowing: IListTile[] = [];

  fetchingAthletes: FetchingModel = {fetching: false};
  fetchingFollowing: FetchingModel = {fetching: false};

  constructor(
    private athleteService: AthleteService,
    private userService: UserService
  ) {
  }

  fetchFollowing(request?: RefreshListRequest) {
    if (request && request.paging.offset != 0) return;
    this.fetchingFollowing.fetching = true;
    this.userService.getUser().subscribe(data => {
      this.following = [];
      if (data.following) {
        if (data.following.length <= 0) this.fetchingFollowing.fetching = false;
        for (const follower of data.following) {
          this.athleteService.getAthleteById(follower.athlete_id).subscribe(ath => {
            if (!this.meetingId) {
              this.following.push(ath);
              this.appendFollowing(ath);
            } else
            if (ath.participation) {
              for (const string of ath.participation) {
                if (string == this.meetingId) {
                  this.following.push(ath);
                  this.appendFollowing(ath);
                }
              }
            }
            this.fetchingFollowing.fetching = false;
          })
        }
      } else {
        this.fetchingFollowing.fetching = false;
      }
    })
  }

  appendFollowing(athlete: Athlete) {
    if (!athlete) return;
    this.listFollowing.push(new AthleteListTile(athlete));
  }

  fetchAthletes(request: RefreshListRequest) {
    this.fetchingAthletes.fetching = true;
    if (request.paging.offset == 0) {
      this.athletes = [];
      this.listAthletes = [];
    }
    if (this.meetingId == undefined) {
      this.athleteService.getAthletes(request.paging).subscribe(data => {
        this.appendAthletes(data);
        this.fetchingAthletes.fetching = false;
      })
    } else {
      this.athleteService.getAthletesByMeeting(this.meetingId, request.paging).subscribe(data => {
        this.appendAthletes(data);
        this.fetchingAthletes.fetching = false;
      })
    }
  }

  appendAthletes(athletes: Athlete[]) {
    if (!athletes) return;
    this.athletes.concat(athletes);
    athletes.forEach(athlete => {
      this.listAthletes.push(new AthleteListTile(athlete));
    })
  }
}
