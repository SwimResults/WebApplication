import { Component, OnDestroy, inject } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {environment} from 'src/environments/environment';
import {SidebarMenuService} from "./core/service/sidebar-menu.service";
import {MeetingImpl, MeetingStates} from "./core/model/meeting/meeting.model";
import {Subscription} from "rxjs";
import {RouteService} from "./core/service/route.service";
import {SidebarComponent} from './shared/layout/sidebar/sidebar.component';
import {HeaderComponent} from './shared/layout/header/header.component';
import {RouterOutlet} from '@angular/router';
import {LiveBarComponent} from './shared/layout/live-bar/live-bar.component';
import {UpperCasePipe} from '@angular/common';
import {Meta, Title} from "@angular/platform-browser";

@Component({
    selector: 'sr-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [SidebarComponent, HeaderComponent, RouterOutlet, LiveBarComponent, UpperCasePipe]
})
export class AppComponent implements OnDestroy {
    private translateService = inject(TranslateService);
    private menuService = inject(SidebarMenuService);
    private routeService = inject(RouteService);
    private headerTitle = inject(Title);
    private headerMeta = inject(Meta);

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

    constructor() {
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
            const body = document.getElementsByTagName("body").item(0);
            if (this.meeting && this.meeting.meet_id) {

                const title = this.meeting.getFullSeriesNameWithYear();

                this.headerTitle.setTitle(`${title} | SwimResults`);

                this.translateService.get("META.DESCRIPTION", {meetingTitle: title}).subscribe({
                    next: text => {
                        this.headerMeta.updateTag({
                            name: 'description', content: text
                        });
                    },
                    error: _ => {
                        this.headerMeta.updateTag({
                            name: 'description',
                            content: `Meldungen, Ergebnisse und Livetiming für '${title}' bei SwimResults`
                        });
                    }
                })

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
