import { Component } from '@angular/core';
import {RouteService} from "../../../core/service/route.service";
import {MeetingImpl} from "../../../core/model/meeting/meeting.model";
import {SidebarMenuService} from "../../../core/service/sidebar-menu.service";

@Component({
  selector: 'sr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  meeting?: MeetingImpl;
  has_meeting: boolean = false;

  constructor(
    private routeService: RouteService,
    private menuService: SidebarMenuService
  ) {
    this.routeService.currentEvent.subscribe(data => {
      this.meeting = new MeetingImpl(data.meeting);
      this.has_meeting = data.has_meeting;
    })
  }

  showMenu() {
    this.menuService.setViewType("full");
  }
}
