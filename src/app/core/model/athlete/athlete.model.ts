import {Team} from "./team.model";

export interface Athlete {
  _id: string;
  name: string;
  year: string;
  team: Team;
  dsv_id: number;
  alias: string[];
  participation: string[];
}
