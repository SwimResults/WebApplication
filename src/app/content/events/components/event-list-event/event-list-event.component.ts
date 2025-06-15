import {Component, Input, OnInit} from '@angular/core';
import {MeetingEvent} from "../../../../core/model/meeting/meeting-event.model";
import {ActivatedRoute, Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";
import {EventListHeatImpl} from "../../../../core/model/start/event-list-heat.model";

@Component({
    selector: 'sr-event-list-event',
    templateUrl: './event-list-event.component.html',
    styleUrls: ['./event-list-event.component.scss'],
    standalone: false
})
export class EventListEventComponent implements OnInit {
  @Input() event!: MeetingEvent;
  @Input() heatInfo?: EventListHeatImpl;

  @Input() clickable: boolean = false;

  heatString: string = "";
  heatsString: string = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {
  }

  ngOnInit() {
    this.translate.get("COMMON.HEAT.PLURAL").subscribe(data => this.heatsString = data);
    this.translate.get("COMMON.HEAT.SINGULAR").subscribe(data => this.heatString = data);
  }

  openEvent() {
    if (!this.clickable) return;
    this.router.navigate([this.event.number], {relativeTo: this.route}).then(_ => {
      console.log("failed to navigate to event: " + this.event.number)
    })
  }
}
