import {Component} from '@angular/core';
import {RouteService} from "../../../../core/service/route.service";

@Component({
  selector: 'sr-nav-event',
  templateUrl: './nav-event.component.html',
  styleUrls: ['./nav-event.component.scss']
})
export class NavEventComponent {
  event: string | null = null;

  constructor(
    private routeService: RouteService
  ) {
    this.routeService.currentEvent.subscribe(data => {
      this.event = data.event;
    })
  }
}
