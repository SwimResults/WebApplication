import {WidgetContainer} from "./widget-container.model";

export interface Widget {
  _id: number,
  size: "SMALL" | "MEDIUM" | "LARGE",
  content: string,
}
