import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RouteService} from "../../../core/service/route.service";
import {Meeting} from "../../../core/model/meeting/meeting.model";
import {SidebarMenuService} from "../../../core/service/sidebar-menu.service";

@Component({
  selector: 'sr-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  meeting: Meeting = {} as Meeting;
  has_meeting: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private routeService: RouteService,
    private menuService: SidebarMenuService
  ) {
  }

  ngOnInit(): void {
    this.routeService.currentEvent.subscribe(data => {
      this.meeting = data.meeting;
      this.has_meeting = data.has_meeting;
      console.log("nav fetched: " + this.meeting?.meet_id);
    })
  }


  hideSidebar() {
    this.menuService.setViewType("hidden");
  }
}
