import {Component, Input} from '@angular/core';
import {Athlete} from "../../../../core/model";

@Component({
    selector: 'sr-athlete-list',
    templateUrl: './athlete-list.component.html',
    styleUrls: ['./athlete-list.component.scss'],
    standalone: false
})
export class AthleteListComponent {
  @Input() athletes!: Athlete[];
}
