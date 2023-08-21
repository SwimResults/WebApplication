import {IListTile} from "./list-tile.model";
import {Athlete} from "../athlete";

export class TeamAthleteListTile implements IListTile {
  id: string;
  name: string;
  nameLink?: string;
  badge?: string;
  team?: string;
  teamLink?: string;
  entryType: "athlete" = "athlete";

  constructor(athlete: Athlete) {
    this.id = athlete._id;
    this.name = athlete.name;
    this.badge = athlete.year;
    this.nameLink = "../../athlete/" + athlete._id;
  }



}
