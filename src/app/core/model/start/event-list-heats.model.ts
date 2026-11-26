import type * as ApiStart from '@swimresults/api/start';
import {EventListHeat} from "./event-list-heat.model";

export type EventListHeats = Omit<ApiStart.MeetingHeatsEventListDto, 'events'> & {
  events: EventListHeat[];
};
