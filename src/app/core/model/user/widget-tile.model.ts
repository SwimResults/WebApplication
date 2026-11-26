import type * as ApiUser from '@swimresults/api/user';
import {Widget} from "./widget.model";

export type WidgetTile = Omit<ApiUser.WidgetTile, 'widget'> & {
  widget: Widget;
};
