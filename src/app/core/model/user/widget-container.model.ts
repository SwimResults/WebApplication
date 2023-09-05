import {WidgetTile} from "./widget-tile.model";


export interface WidgetContainer {
  id: number,
  orderPosition: number,
  widgets: Array<WidgetTile>;
}
