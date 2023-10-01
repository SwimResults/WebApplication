import {Component, Input, OnInit} from '@angular/core';
import {Athlete} from "../../../../core/model";
import {UserService} from "../../../../core/service/api";
import {User} from "../../../../core/model/user/user.model";

@Component({
  selector: 'sr-athlete-profile-intro',
  templateUrl: './athlete-profile-intro.component.html',
  styleUrls: ['./athlete-profile-intro.component.scss']
})
export class AthleteProfileIntroComponent implements OnInit {
  @Input() athlete!: Athlete;
  isFollowed: boolean = false;
  updatingFollowing: boolean = false;

  constructor(
    private userService: UserService
  ) {

  }

  ngOnInit(): void {
    this.userService.getUser().subscribe(data => {
      this.updateFollowingState(data);
    })
  }

  follow() {
    this.changeFollowing(true);
  }

  unfollow() {
    this.changeFollowing(false);
  }

  changeFollowing(follow: boolean) {
    this.updatingFollowing = true;
    this.userService.setFollowing(this.athlete._id, follow).subscribe(data => {
      this.updateFollowingState(data);
      this.updatingFollowing = false;
    })
  }

  updateFollowingState(user: User) {
    console.log("checking following for: " + this.athlete._id);
    if (user.following) {
      for (let follower of user.following) {
        if (this.athlete._id == follower.athlete_id) {
          this.isFollowed = true;
          return;
        }
      }
    }
    this.isFollowed = false;
  }



}
