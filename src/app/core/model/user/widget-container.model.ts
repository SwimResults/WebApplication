import type * as ApiUser from '@swimresults/api/user';
import {WidgetTile} from "./widget-tile.model";


export type WidgetContainer = Omit<ApiUser.WidgetContainer, 'widgets'> & {
  widgets: WidgetTile[];
};
