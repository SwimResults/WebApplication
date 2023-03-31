import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RouteService} from "../../../core/service/route.service";

@Component({
  selector: 'sr-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  event: string | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private routeService: RouteService
  ) {
  }

  ngOnInit(): void {
    this.routeService.currentEvent.subscribe(data => {
      this.event = data.event;
    })
  }


}
