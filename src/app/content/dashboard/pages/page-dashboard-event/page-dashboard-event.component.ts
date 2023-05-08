import { Component } from '@angular/core';
import {RouteService} from "../../../../core/service/route.service";
import {Meeting} from "../../../../core/model/meeting/meeting.model";

@Component({
  selector: 'sr-page-dashboard-event',
  templateUrl: './page-dashboard-event.component.html',
  styleUrls: ['./page-dashboard-event.component.scss']
})
export class PageDashboardEventComponent {
  meeting: Meeting = {} as Meeting;

  constructor(
    private routeService: RouteService
  ) {
    this.routeService.currentEvent.subscribe(data => {
      this.meeting = data.meeting;
    })
  }

}
