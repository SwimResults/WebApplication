import { Component } from '@angular/core';
import {WidgetContainer} from "../../../../core/model/user/widget-container.model";

@Component({
  selector: 'sr-page-dashboard-event',
  templateUrl: './page-dashboard-event.component.html',
  styleUrls: ['./page-dashboard-event.component.scss']
})
export class PageDashboardEventComponent {

  widgets: WidgetContainer[] = [
    {
      id: 1,
      orderPosition: 1,
      widgets: [
        {
          id: 1,
          size: "LARGE",
          user: "default",
          content: "meeting",
          orderPosition: 1,
          container: undefined
        }
      ]
    },
    {
      id: 2,
      orderPosition: 2,
      widgets: [
        {
          id: 1,
          size: "SMALL",
          user: "default",
          content: "user",
          orderPosition: 1,
          container: undefined
        },
        {
          id: 2,
          size: "SMALL",
          user: "default",
          content: "user",
          orderPosition: 2,
          container: undefined
        },
        {
          id: 3,
          size: "SMALL",
          user: "default",
          content: "user",
          orderPosition: 3,
          container: undefined
        },
        {
          id: 4,
          size: "SMALL",
          user: "default",
          content: "clock",
          orderPosition: 4,
          container: undefined
        }
      ]
    }
  ]
}
