import {Component, OnInit} from '@angular/core';
import {MeetingImpl, MeetingStates} from "../../../../core/model/meeting/meeting.model";
import {MeetingService} from "../../../../core/service/api";
import {FetchingModel} from "../../../../core/model/common/fetching.model";

@Component({
  selector: 'sr-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss']
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
        for (let meet of data) {
          let m = new MeetingImpl(meet);
          if (m.hasState(MeetingStates.HIDDEN)) continue;
          let y = m.getStartDate().getFullYear();
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
