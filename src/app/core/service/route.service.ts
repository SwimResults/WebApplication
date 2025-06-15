import { Injectable } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {BehaviorSubject, distinctUntilChanged, filter, map, mergeMap} from "rxjs";
import {RouteEvent} from "../model";
import {MeetingService} from "./api";
import {Meeting} from "../model/meeting/meeting.model";

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private currentMeetingSubject = new BehaviorSubject<RouteEvent>({} as RouteEvent);
  public currentMeeting = this.currentMeetingSubject.asObservable().pipe(distinctUntilChanged());
  private currentMeetingIdSubject= new BehaviorSubject<string | undefined>("");
  public currentMeetingId = this.currentMeetingIdSubject.asObservable().pipe(distinctUntilChanged());

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private meetingService: MeetingService
  ) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        let ev: string | null = null;
        while (route.firstChild) {
          route = route.firstChild;
          if (route.snapshot.paramMap.has('event')) {
            ev = route.snapshot.paramMap.get('event');
            console.log("new event: " + ev);
            break;
          }
        }

        if (ev) this.currentMeetingIdSubject.next(ev);
        else this.currentMeetingIdSubject.next(undefined);

        const meeting: RouteEvent = new class implements RouteEvent {
            meeting: Meeting = {} as Meeting;
            has_meeting: boolean = false;
        }

        if (ev) {
          this.meetingService.getCachedMeetingByMeetId(ev).subscribe(data => {
            meeting.meeting = data;
            meeting.has_meeting = true;
            this.currentMeetingSubject.next(
              meeting
            );
          })
        } else {
          this.currentMeetingSubject.next(
            meeting
          );
        }
        return route;
      }),
      mergeMap((route) => {
        return route.data;
      })
    )
      .subscribe();
  }
}
