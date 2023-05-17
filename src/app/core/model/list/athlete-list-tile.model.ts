import {IListTile} from "./list-tile.model";
import {Athlete} from "../athlete";

export class AthleteListTile implements IListTile {
  id: string;
  name: string;

  constructor(athlete: Athlete) {
    this.id = athlete._id;
    this.name = athlete.name;
  }

}
