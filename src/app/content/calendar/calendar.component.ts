import {Component, OnInit} from '@angular/core';
import {Meeting} from "../../core/model/meeting/meeting.model";
import {MeetingService} from "../../core/service/api/meeting/meeting.service";

@Component({
  selector: 'sr-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit{

  meetings: Meeting[] = [];

  constructor(
    private meetingService: MeetingService
  ) {}


  ngOnInit(): void {
    this.fetchMeetings();
  }


  fetchMeetings() {
    this.meetingService.getMeetings().subscribe(data => {
      this.meetings = data;
    })
  }


}
