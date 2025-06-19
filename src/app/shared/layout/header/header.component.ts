import { Component, inject } from '@angular/core';
import {RouteService} from "../../../core/service/route.service";
import {MeetingImpl} from "../../../core/model/meeting/meeting.model";
import {SidebarMenuService} from "../../../core/service/sidebar-menu.service";
import {PanelComponent} from '../../elements/panel/panel.component';
import {IconPanelComponent} from '../../elements/icon-panel/icon-panel.component';
import {HeaderButtonsComponent} from './header-buttons/header-buttons.component';

@Component({
    selector: 'sr-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    imports: [PanelComponent, IconPanelComponent, HeaderButtonsComponent]
})
export class HeaderComponent {
  private routeService = inject(RouteService);
  private menuService = inject(SidebarMenuService);


  meeting?: MeetingImpl;
  has_meeting: boolean = false;

  constructor() {
    this.routeService.currentMeeting.subscribe(data => {
      this.meeting = new MeetingImpl(data.meeting);
      this.has_meeting = data.has_meeting;
    })
  }

  showMenu() {
    this.menuService.setViewType("full");
  }
}
