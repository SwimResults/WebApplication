import {WidgetTile} from "./widget-tile.model";


export interface WidgetContainer {
  order_position: number;
  widgets: WidgetTile[];
}
