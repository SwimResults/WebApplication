import {WidgetContainer} from "./widget-container.model";

export interface WidgetTile {
  id: number,
  size: "SMALL" | "MEDIUM" | "LARGE",
  user: string,
  content: string,
  orderPosition: 1 | 2 | 3 | 4,
  container?: WidgetContainer
}
