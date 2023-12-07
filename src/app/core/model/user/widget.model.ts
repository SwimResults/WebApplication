import {WidgetContainer} from "./widget-container.model";

export interface Widget {
  _id: string,
  size: "SMALL" | "MEDIUM" | "LARGE",
  content: string,
}
