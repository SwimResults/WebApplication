import { Component, OnInit, inject } from '@angular/core';
import {PageTitleComponent} from '../../shared/elements/page-title/page-title.component';
import {PanelComponent} from '../../shared/elements/panel/panel.component';
import {RouterLink} from '@angular/router';
import {Meeting, MeetingService} from '@swimresults/angular';

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
