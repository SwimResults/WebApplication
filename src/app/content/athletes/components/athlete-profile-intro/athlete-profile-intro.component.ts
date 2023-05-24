import {Component, Input} from '@angular/core';
import {Athlete} from "../../../../core/model";

@Component({
  selector: 'sr-athlete-profile-intro',
  templateUrl: './athlete-profile-intro.component.html',
  styleUrls: ['./athlete-profile-intro.component.scss']
})
export class AthleteProfileIntroComponent {
  @Input() athlete!: Athlete;

}
