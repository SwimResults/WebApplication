import {IListTile} from "./list-tile.model";
import {Team} from "../athlete";

export class TeamListTile implements IListTile {
  id: string;
  name: string;
  nameLink?: string;
  entryType: "team" = "team";

  constructor(team: Team) {
    this.id = team._id;
    this.name = team.name;
    this.nameLink = "" + team._id;
  }

}
