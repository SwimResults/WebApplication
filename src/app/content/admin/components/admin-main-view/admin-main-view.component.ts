import {Component, OnDestroy} from '@angular/core';
import {MeetingImpl} from "../../../../core/model/meeting/meeting.model";
import {ReplaySubject, Subscription} from "rxjs";
import {RouteService} from "../../../../core/service/route.service";
import {Heat} from "../../../../core/model/start/heat.model";
import {ViewportScroller} from "@angular/common";
import {AdminHeatToolComponent} from '../admin-heat-tool/admin-heat-tool.component';
import {AdminImportToolComponent} from '../admin-import-tool/admin-import-tool.component';
import {AdminReportViewComponent} from '../admin-report-view/admin-report-view.component';

@Component({
    selector: 'sr-admin-main-view',
    templateUrl: './admin-main-view.component.html',
    styleUrls: ['./admin-main-view.component.scss'],
    imports: [AdminHeatToolComponent, AdminImportToolComponent, AdminReportViewComponent]
})
export class AdminMainViewComponent implements OnDestroy {
  meeting?: MeetingImpl;
  meetingId?: string;
  meetingSubscription: Subscription;
  meetingIdSubscription: Subscription;

  showHeat: ReplaySubject<Heat> = new ReplaySubject<Heat>();

  constructor(
    private routeService: RouteService,
    private scroller: ViewportScroller
  ) {
    this.meetingSubscription = this.routeService.currentMeeting.subscribe(data => {
      this.meeting = new MeetingImpl(data.meeting);
      console.log("fetched meeting:")
      console.log(this.meeting)
    })
    this.meetingIdSubscription = this.routeService.currentMeetingId.subscribe(data => {
      this.meetingId = data;
    })
  }

  ngOnDestroy() {
    this.meetingSubscription.unsubscribe();
    this.meetingIdSubscription.unsubscribe();
  }

  onShowHeat(h: Heat) {
    this.showHeat.next(h)
    this.scroller.scrollToAnchor("heat_tool");
  }
}
