import {Component, Input, OnInit} from '@angular/core';
import {MeetingEvent} from "../../../../core/model/meeting/meeting-event.model";
import {HeatImpl} from "../../../../core/model/start/heat.model";
import {ActivatedRoute, Router} from "@angular/router";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'sr-event-list-event',
  templateUrl: './event-list-event.component.html',
  styleUrls: ['./event-list-event.component.scss']
})
export class EventListEventComponent implements OnInit {
  @Input() event!: MeetingEvent;
  @Input() heats!: Map<number, HeatImpl[]>;
  heat?: HeatImpl;

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

    let h: HeatImpl[] | undefined = this.heats?.get(this.event.number);
    if (h && h.length > 0) {
      this.heat = h[0];
      this.event.heats = h.length;
    }
  }

  openEvent() {
    this.router.navigate([this.event.number], {relativeTo: this.route}).then(_ => {
      console.log("failed to navigate to event: " + this.event.number)
    })
  }
}
