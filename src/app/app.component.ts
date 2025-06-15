import {Component, OnDestroy} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { environment } from 'src/environments/environment';
import {SidebarMenuService} from "./core/service/sidebar-menu.service";
import {MeetingImpl, MeetingStates} from "./core/model/meeting/meeting.model";
import {Subscription} from "rxjs";
import {RouteService} from "./core/service/route.service";

@Component({
    selector: 'sr-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnDestroy {
  meeting?: MeetingImpl;
  meetingId?: string;
  meetingSubscription: Subscription;
  meetingIdSubscription: Subscription;

  title = 'swimresults';

  build: string = "";
  showBuild: boolean = true;
  showEnv: boolean = true;
  sidebarState = "";

  environment = environment.environment;
  env_color = environment.env_color;

  constructor(
    private translateService: TranslateService,
    private menuService: SidebarMenuService,
    private routeService: RouteService
  ) {
    this.showBuild = this.environment != 'productive'
    this.showEnv = this.environment != 'productive'

    this.fetchBuild().then(r => {
      this.build = r;
    });

    let lang = window.localStorage.getItem("language");
    if (!lang) {
        //lang = navigator.language;
        lang = "de";
    }
    this.translateService.use(lang);

    this.menuService.viewType.subscribe(data => {
      this.sidebarState = data;
    })


    this.meetingSubscription = this.routeService.currentMeeting.subscribe(data => {
      this.meeting = new MeetingImpl(data.meeting);
      let body = document.getElementsByTagName("body").item(0);
      if (this.meeting && this.meeting.meet_id) {
        if (this.meeting.layout && this.meeting.layout.color_set && this.meeting.layout.color_set.primary && this.meeting.layout.color_set.secondary) {
          body?.style.setProperty("--bg-gradient-1", this.meeting.layout.color_set.primary);
          body?.style.setProperty("--bg-gradient-2", this.meeting.layout.color_set.secondary);
        } else {
          body?.style.setProperty("--bg-gradient-1", "#a3ffff");
          body?.style.setProperty("--bg-gradient-2", "#ffa3ed");
        }
      } else {
        body?.style.removeProperty("--bg-gradient-1");
        body?.style.removeProperty("--bg-gradient-2");
      }
    })
    this.meetingIdSubscription = this.routeService.currentMeetingId.subscribe(data => {
      this.meetingId = data;
    })
  }

  ngOnDestroy() {
    this.meetingSubscription.unsubscribe();
    this.meetingIdSubscription.unsubscribe();
  }

  async fetchBuild() {
    const response = await fetch("assets/release.txt");
    return await response.text();
  }

  toggleBuild() {
    this.showBuild = !this.showBuild;
  }

  toggleEnv() {
    this.showEnv = !this.showEnv;
  }

  hideSidebar() {
    this.menuService.setViewType("hidden");
  }

    protected readonly MeetingStates = MeetingStates;
}
