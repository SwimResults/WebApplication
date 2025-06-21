import { Component, OnInit, inject } from '@angular/core';
import {Meeting} from "../../core/model/meeting/meeting.model";
import {MeetingService} from "../../core/service/api";
import {PageTitleComponent} from '../../shared/elements/page-title/page-title.component';
import {PanelComponent} from '../../shared/elements/panel/panel.component';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'sr-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss'],
    imports: [PageTitleComponent, PanelComponent, RouterLink]
})
export class CalendarComponent implements OnInit{
  private meetingService = inject(MeetingService);


  meetings: Meeting[] = [];


  ngOnInit(): void {
    this.fetchMeetings();
  }


  fetchMeetings() {
    this.meetingService.getMeetings().subscribe(data => {
      this.meetings = data;
    })
  }


}
