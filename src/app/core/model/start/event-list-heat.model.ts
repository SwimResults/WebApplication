import {Heat, HeatImpl} from "./heat.model";

export interface EventListHeat {
  event_number: number;
  first_heat: Heat;
  amount: number;
}

export class EventListHeatImpl implements EventListHeat{
  event_number: number;
  first_heat: HeatImpl;
  amount: number;

  constructor(eventListHeat: EventListHeat) {
    this.event_number = eventListHeat.event_number;
    this.first_heat = new HeatImpl(eventListHeat.first_heat);
    this.amount = eventListHeat.amount;
  }
}
