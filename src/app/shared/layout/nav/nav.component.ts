import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RouteService} from "../../../core/service/route.service";
import {Meeting} from "../../../core/model/meeting/meeting.model";
import {SidebarMenuService} from "../../../core/service/sidebar-menu.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'sr-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
  meeting: Meeting = {} as Meeting;
  meetingId: string | undefined;
  private meetingSubscription: Subscription;
  private meetingIdSubscription: Subscription;

  meetingParam = {short: ""}

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private routeService: RouteService,
    private menuService: SidebarMenuService
  ) {
    this.meetingIdSubscription = this.routeService.currentMeetingId.subscribe(data => {
      this.meetingId = data;
    })
    this.meetingSubscription = this.routeService.currentMeeting.subscribe(data => {
      this.meeting = data.meeting;
      this.meetingParam.short = data.meeting.series.name_short;
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.meetingIdSubscription.unsubscribe();
    this.meetingSubscription.unsubscribe();
  }

  hideSidebar() {
    this.menuService.setViewType("hidden");
  }
}
