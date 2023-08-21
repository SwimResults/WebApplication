import {Component, Input} from '@angular/core';
import {Team} from "../../../../core/model";
import {countryFlags} from "../../../../core/constant/countryflags.constant";

@Component({
  selector: 'sr-team-profile-intro',
  templateUrl: './team-profile-intro.component.html',
  styleUrls: ['./team-profile-intro.component.scss']
})
export class TeamProfileIntroComponent {
  @Input() team!: Team;

  flags: Map<string, string> = countryFlags;
}
