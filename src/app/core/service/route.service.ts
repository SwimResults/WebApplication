import { Injectable } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {BehaviorSubject, distinctUntilChanged, filter, map, mergeMap} from "rxjs";
import {RouteEvent} from "../model";

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private currentEventSubject = new BehaviorSubject<RouteEvent>({} as RouteEvent);
  public currentEvent = this.currentEventSubject.asObservable().pipe(distinctUntilChanged());

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
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
        this.currentEventSubject.next(
          new class implements RouteEvent {
            event: string | null = ev;
          }
        );
        return route;
      }),
      mergeMap((route) => {
        return route.data;
      })
    )
      .subscribe();
  }
}
