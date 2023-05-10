import {Component, Input} from '@angular/core';
import {Athlete} from "../../../../core/model";

@Component({
  selector: 'mpp-athlete-list',
  templateUrl: './athlete-list.component.html',
  styleUrls: ['./athlete-list.component.scss']
})
export class AthleteListComponent {
  @Input() athletes!: Athlete[];
}
