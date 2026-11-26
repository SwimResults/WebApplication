import type * as ApiStart from '@swimresults/api/start';
import {HeatImpl} from "./heat.model";

export type EventListHeat = ApiStart.MeetingHeatEventListDto;

export class EventListHeatImpl implements EventListHeat{
  event_number: number;
  first_heat: HeatImpl;
  amount: number;

  constructor(eventListHeat: EventListHeat) {
    this.event_number = eventListHeat.event_number ?? 0;
    this.first_heat = new HeatImpl(eventListHeat.first_heat);
    this.amount = eventListHeat.amount ?? 0;
  }
}
