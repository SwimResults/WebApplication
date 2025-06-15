import {Component, Input} from '@angular/core';
import {Team} from "../../../../core/model";

@Component({
    selector: 'sr-team-list',
    templateUrl: './team-list.component.html',
    styleUrls: ['./team-list.component.scss'],
    standalone: false
})
export class TeamListComponent {
  @Input() teams!: Team[];
}
