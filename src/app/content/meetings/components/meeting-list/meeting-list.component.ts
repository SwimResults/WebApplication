import {Component, OnInit} from '@angular/core';
import {MeetingImpl, MeetingStates} from "../../../../core/model/meeting/meeting.model";
import {MeetingService} from "../../../../core/service/api";
import {FetchingModel} from "../../../../core/model/common/fetching.model";
import {SpinnerComponent} from '../../../../shared/elements/spinner/spinner.component';
import {MeetingListTileComponent} from '../meeting-list-tile/meeting-list-tile.component';

@Component({
    selector: 'sr-meeting-list',
    templateUrl: './meeting-list.component.html',
    styleUrls: ['./meeting-list.component.scss'],
    imports: [SpinnerComponent, MeetingListTileComponent]
})
export class MeetingListComponent implements OnInit{

  meetingYears: Map<number, MeetingImpl[]> = new Map<number, MeetingImpl[]>()
  fetching: FetchingModel = {fetching: false};

  constructor(
    private meetingService: MeetingService
  ) {}


  ngOnInit(): void {
    this.fetchMeetings();
  }


  fetchMeetings() {
    this.fetching.fetching = true;
    this.meetingService.getMeetings().subscribe({next: data => {
      if (data) {
        this.meetingYears.clear();
        for (const meet of data) {
          const m = new MeetingImpl(meet);
          if (m.hasState(MeetingStates.HIDDEN) || m.unpublished) continue;
          const y = m.getStartDate().getFullYear();
          if (!this.meetingYears.get(y)) {
            this.meetingYears.set(y, []);
          }
          this.meetingYears.get(y)?.push(m);
        }
      }
      this.fetching.fetching = false;
    }, error: _ => {
        //this.fetching = false;
    }});
  }
}
