import { Component } from '@angular/core';
import {RouteService} from "../../../core/service/route.service";

@Component({
  selector: 'sr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  event: string | null = null;

  constructor(
    private routeService: RouteService
  ) {
    this.routeService.currentEvent.subscribe(data => {
      this.event = data.event;
    })
  }
}
