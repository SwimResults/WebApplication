import {IListTile} from "./list-tile.model";
import {Athlete} from "../athlete";

export class UserAthleteListTile implements IListTile {
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
    this.team = athlete.team.name;
    this.nameLink = "../../athlete/" + athlete.alias[0] + "-" + athlete.year;
    this.teamLink = "../../team/@" + athlete.team.alias[0];
  }
}
