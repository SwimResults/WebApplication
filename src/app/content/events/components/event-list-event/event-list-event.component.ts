import { Component, Input, OnInit, inject } from '@angular/core';
import {MeetingEvent} from "../../../../core/model/meeting/meeting-event.model";
import {ActivatedRoute, Router} from "@angular/router";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {EventListHeatImpl} from "../../../../core/model/start/event-list-heat.model";
import {HeatTimesComponent} from '../../../../shared/elements/heat-times/heat-times.component';
import {IconPanelComponent} from '../../../../shared/elements/icon-panel/icon-panel.component';

@Component({
    selector: 'sr-event-list-event',
    templateUrl: './event-list-event.component.html',
    styleUrls: ['./event-list-event.component.scss'],
    imports: [HeatTimesComponent, IconPanelComponent, TranslateModule]
})
export class EventListEventComponent implements OnInit {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private translate = inject(TranslateService);

  @Input() event!: MeetingEvent;
  @Input() heatInfo?: EventListHeatImpl;

  @Input() clickable: boolean = false;

  heatString: string = "";
  heatsString: string = "";

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
