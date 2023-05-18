import {IListTile} from "./list-tile.model";
import {Team} from "../athlete";

export class TeamListTile implements IListTile {
  id: string;
  name: string;

  constructor(team: Team) {
    this.id = team._id;
    this.name = team.name;
  }

}
