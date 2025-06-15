import {IListTile} from "./list-tile.model";
import {Athlete} from "../athlete";

export class TeamAthleteListTile implements IListTile {
  id: string;
  name: string;
  nameLink?: string;
  badge?: string;
  team?: string;
  teamLink?: string;
  entryType = "athlete" as const;

  constructor(athlete: Athlete) {
    this.id = athlete._id;
    this.name = athlete.name;
    this.badge = athlete.year;
    this.nameLink = "../../athlete/" + athlete.alias[0] + "-" + athlete.year;
  }



}
