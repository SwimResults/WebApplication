import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {RouteService} from "../../../core/service/route.service";
import {Meeting} from "../../../core/model/meeting/meeting.model";
import {SidebarMenuService} from "../../../core/service/sidebar-menu.service";
import {Subscription} from "rxjs";
import {MatIcon} from '@angular/material/icon';
import {NavDefaultComponent} from './nav-default/nav-default.component';
import {NavEventComponent} from './nav-event/nav-event.component';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    imports: [RouterLink, MatIcon, NavDefaultComponent, NavEventComponent, TranslateModule]
})
export class NavComponent implements OnDestroy {
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

  ngOnDestroy() {
    this.meetingIdSubscription.unsubscribe();
    this.meetingSubscription.unsubscribe();
  }

  hideSidebar() {
    this.menuService.setViewType("hidden");
  }
}
