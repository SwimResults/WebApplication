import { Component, Input, OnInit, inject } from '@angular/core';
import {Athlete} from "../../../../core/model";
import {UserService} from "../../../../core/service/api";
import {User} from "../../../../core/model/user/user.model";
import {RouterLink} from '@angular/router';
import {IsAuthedDirective} from '../../../../core/directive/is-authed.directive';
import {BtnComponent} from '../../../../shared/elements/buttons/btn/btn.component';
import {SpinnerComponent} from '../../../../shared/elements/spinner/spinner.component';
import {TranslateModule} from '@ngx-translate/core';
import {ReportDialogService} from "../../../../core/service/report-dialog.service";
import {UserReportSubjectType} from "../../../../core/model/user/user-report.model";
import {MatIcon} from "@angular/material/icon";

@Component({
    selector: 'sr-athlete-profile-intro',
    templateUrl: './athlete-profile-intro.component.html',
    styleUrls: ['./athlete-profile-intro.component.scss'],
    imports: [
        RouterLink,
        IsAuthedDirective,
        BtnComponent,
        SpinnerComponent,
        TranslateModule,
        MatIcon
    ]
})
export class AthleteProfileIntroComponent implements OnInit {
    private userService = inject(UserService);
    private reportDialog = inject(ReportDialogService);

    @Input() athlete!: Athlete;
    isFollowed: boolean = false;
    updatingFollowing: boolean = false;

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
            for (const follower of user.following) {
                if (this.athlete._id == follower.athlete_id) {
                    this.isFollowed = true;
                    return;
                }
            }
        }
        this.isFollowed = false;
    }


    reportIssue() {
        this.reportDialog.openReportDialog(this.athlete._id, UserReportSubjectType.ATHLETE, this.athlete.name);
    }
}
