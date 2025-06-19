import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {Athlete} from "../../../../core/model";
import {AthleteService} from "../../../../core/service/api";
import {ActivatedRoute} from "@angular/router";
import {RouteService} from "../../../../core/service/route.service";
import {Meeting} from "../../../../core/model/meeting/meeting.model";
import {Subscription} from "rxjs";
import {FetchingModel} from "../../../../core/model/common/fetching.model";
import {SpinnerComponent} from '../../../../shared/elements/spinner/spinner.component';
import {AthleteProfileIntroComponent} from '../../components';
import {PanelComponent} from '../../../../shared/elements/panel/panel.component';
import {AthleteStartsComponent} from '../../components';

@Component({
    selector: 'sr-page-athlete',
    templateUrl: './page-athlete.component.html',
    styleUrls: ['./page-athlete.component.scss'],
    imports: [SpinnerComponent, AthleteProfileIntroComponent, PanelComponent, AthleteStartsComponent]
})
export class PageAthleteComponent implements OnInit, OnDestroy {
  private athleteService = inject(AthleteService);
  private activatedRoute = inject(ActivatedRoute);
  private routeService = inject(RouteService);

  meeting: Meeting = {} as Meeting;
  meetingId: string | undefined;
  private meetingSubscription: Subscription;
  private meetingIdSubscription: Subscription;

  athlete: Athlete = {} as Athlete;
  athleteId?: string;
  athleteAlias?: string;
  athleteYear?: number;

  fetchingAthlete: FetchingModel = {fetching: false}


  constructor() {
    this.meetingIdSubscription = this.routeService.currentMeetingId.subscribe(data => {
      this.meetingId = data;
    })
    this.meetingSubscription = this.routeService.currentMeeting.subscribe(data => {
      this.meeting = data.meeting;
    })
  }

  ngOnDestroy() {
    this.meetingIdSubscription.unsubscribe();
    this.meetingSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(s => {
      const s0: string = s["entity_id"];
      if (s0.includes("-")) {
        const s2s = s0.split("-", 2)
        this.athleteAlias = s2s[0];
        this.athleteYear = +s2s[1];
        console.log("extracted alias: '" + this.athleteAlias + "' and year: '" + this.athleteYear + "'");
      } else {
        this.athleteId = s0;
      }
      this.fetchAthlete();
    });
  }

  fetchAthlete() {
    this.fetchingAthlete.fetching = true;
    if (this.athleteId) {
      this.athleteService.getAthleteById(this.athleteId).subscribe(data => {
        this.athlete = data;
        this.fetchingAthlete.fetching = false;
      })
    } else if (this.athleteAlias && this.athleteYear) {
      this.athleteService.getAthleteByAliasAndYear(this.athleteAlias, this.athleteYear).subscribe(data => {
        this.athlete = data;
        this.athleteId = this.athlete._id
        this.fetchingAthlete.fetching = false;
      })
    }
  }

}
