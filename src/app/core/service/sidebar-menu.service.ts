import { Injectable } from '@angular/core';
import {BehaviorSubject, distinctUntilChanged} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidebarMenuService {

  private viewTypeSubject: BehaviorSubject<string> = new BehaviorSubject<string>("default");
  public viewType = this.viewTypeSubject.asObservable().pipe(distinctUntilChanged());

  setViewType(viewType: "full" | "icons" | "hidden" | "default") {
    this.viewTypeSubject.next(viewType);
  }
}
