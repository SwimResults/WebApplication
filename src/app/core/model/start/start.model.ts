import {Heat, HeatImpl} from "./heat.model";
import {Disqualification, DisqualificationImpl} from "./disqualification.model";

export interface Start {
  _id: string;
  meeting: string;
  event: string;
  heat_number: number;
  heat: Heat;
  lane: number;
  athlete: string;
  delay: number;
  rank: number;
  certified: boolean;
  disqualification: Disqualification;

}

export class StartImpl implements Start {
  _id: string;
  athlete: string;
  certified: boolean;
  delay: number;
  disqualification: DisqualificationImpl;
  event: string;
  heat: HeatImpl;
  heat_number: number;
  lane: number;
  meeting: string;
  rank: number;


  constructor(start: Start) {
    this._id = start._id;
    this.athlete = start.athlete;
    this.certified = start.certified;
    this.delay = start.delay;
    this.disqualification = new DisqualificationImpl(start.disqualification);
    this.event = start.event;
    this.heat = new HeatImpl(start.heat);
    this.heat_number = start.heat_number;
    this.lane = start.lane;
    this.meeting = start.meeting;
    this.rank = start.rank;
  }
}
