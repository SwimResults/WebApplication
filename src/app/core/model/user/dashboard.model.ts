import type * as ApiUser from '@swimresults/api/user';
import {WidgetContainer} from "./widget-container.model";

export type Dashboard = Omit<ApiUser.Dashboard, 'widget_container'> & {
  widget_container: WidgetContainer[];
};
