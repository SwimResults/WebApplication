import {Component, OnInit} from '@angular/core';
import {Meeting} from "../../core/model/meeting/meeting.model";
import {MeetingService} from "../../core/service/api";

@Component({
    selector: 'sr-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    standalone: false
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
