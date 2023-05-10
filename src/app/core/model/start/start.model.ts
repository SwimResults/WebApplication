import {Heat} from "./heat.model";

export interface Start {
  _id: string;
  meeting: string;
  heat: Heat;
  lane: number;
  athlete: string;
  delay: number;
  rank: number;
  certified: boolean;

}
