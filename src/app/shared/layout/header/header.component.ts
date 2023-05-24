import { Component } from '@angular/core';
import {RouteService} from "../../../core/service/route.service";
import {MeetingImpl} from "../../../core/model/meeting/meeting.model";

@Component({
  selector: 'sr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  meeting?: MeetingImpl;
  has_meeting: boolean = false;

  constructor(
    private routeService: RouteService
  ) {
    this.routeService.currentEvent.subscribe(data => {
      this.meeting = new MeetingImpl(data.meeting);
      this.has_meeting = data.has_meeting;
    })
  }
}
