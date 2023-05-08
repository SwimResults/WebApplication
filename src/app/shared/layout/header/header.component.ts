import { Component } from '@angular/core';
import {RouteService} from "../../../core/service/route.service";
import {Meeting} from "../../../core/model/meeting/meeting.model";

@Component({
  selector: 'sr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  meeting: Meeting = {} as Meeting;
  has_meeting: boolean = false;

  constructor(
    private routeService: RouteService
  ) {
    this.routeService.currentEvent.subscribe(data => {
      this.meeting = data.meeting;
      this.has_meeting = data.has_meeting;
    })
  }
}
