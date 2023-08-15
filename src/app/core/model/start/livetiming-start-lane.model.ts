import {StartImpl} from "./start.model";

export interface LivetimingStartLane {
  start: StartImpl;
  lane: number;
  free: boolean;
}
