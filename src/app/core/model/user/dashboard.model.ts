import {WidgetContainer} from "./widget-container.model";

export interface Dashboard {
    _id: string;
    widget_container: WidgetContainer[];
    user: string;
    official: boolean;
    default: boolean;
    meeting_states: string[];
}
