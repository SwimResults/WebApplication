import {Component, Input} from '@angular/core';
import {Athlete} from "../../../../core/model";
import {AthleteService} from "../../../../core/service/api";
import {Meeting} from "../../../../core/model/meeting/meeting.model";
import {IListTile} from "../../../../core/model/list/list-tile.model";
import {RefreshListRequest} from "../../../../core/model/list/refresh-list-request.model";
import {AthleteListTile} from "../../../../core/model/list/athlete-list-tile.model";

@Component({
  selector: 'sr-athlete-list-view',
  templateUrl: './athlete-list-view.component.html',
  styleUrls: ['./athlete-list-view.component.scss']
})
export class AthleteListViewComponent {
  @Input() meeting?: Meeting;
  @Input() meetingId: string | undefined;
  athletes: Athlete[] = [];
  listAthletes: IListTile[] = [];

  constructor(
    private athleteService: AthleteService
  ) {
  }

  fetchAthletes(request: RefreshListRequest) {
    if (request.paging.offset == 0) {
      this.athletes = [];
      this.listAthletes = [];
    }
    if (this.meetingId == undefined) {
      this.athleteService.getAthletes(request.paging).subscribe(data => {
        this.appendAthletes(data);
      })
    } else {
      this.athleteService.getAthletesByMeeting(this.meetingId, request.paging).subscribe(data => {
        this.appendAthletes(data);
      })
    }
  }

  appendAthletes(athletes: Athlete[]) {
    this.athletes.concat(athletes);
    athletes.forEach(athlete => {
      this.listAthletes.push(new AthleteListTile(athlete));
    })
  }
}
