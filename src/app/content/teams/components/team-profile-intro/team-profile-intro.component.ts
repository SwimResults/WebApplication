import { Component, Input, inject } from '@angular/core';
import {Team} from "../../../../core/model";
import {countryFlags} from "../../../../core/constant/countryflags.constant";
import {BtnComponent} from "../../../../shared/elements/buttons/btn/btn.component";
import {TranslateModule} from "@ngx-translate/core";
import {MatIcon} from "@angular/material/icon";
import {ReportDialogService} from "../../../../core/service/report-dialog.service";
import {UserReportSubjectType} from "../../../../core/model/user/user-report.model";

@Component({
    selector: 'sr-team-profile-intro',
    templateUrl: './team-profile-intro.component.html',
    imports: [
        BtnComponent,
        TranslateModule,
        MatIcon
    ],
    styleUrls: ['./team-profile-intro.component.scss']
})
export class TeamProfileIntroComponent {
    private reportDialogService = inject(ReportDialogService);

    @Input() team!: Team;

    flags: Map<string, string> = countryFlags;

    reportIssue() {
        this.reportDialogService.openReportDialog(this.team._id, UserReportSubjectType.TEAM, this.team.name);
    }
}
