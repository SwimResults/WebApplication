import {Component, OnInit} from '@angular/core';
import {MeetingImpl} from "../../../../core/model/meeting/meeting.model";
import {MeetingService} from "../../../../core/service/api";

@Component({
  selector: 'sr-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.scss']
})
export class MeetingListComponent implements OnInit{

  meetingYears: Map<number, MeetingImpl[]> = new Map<number, MeetingImpl[]>()

  constructor(
    private meetingService: MeetingService
  ) {}


  ngOnInit(): void {
    this.fetchMeetings();
  }


  fetchMeetings() {
    this.meetingService.getMeetings().subscribe(data => {
      this.meetingYears.clear();
      for (let meet of data) {
        let m = new MeetingImpl(meet);
        let y = m.getStartDate().getFullYear();
        if (!this.meetingYears.get(y)) {
          this.meetingYears.set(y, []);
        }
        this.meetingYears.get(y)?.push(m);
      }
    })
  }
}
