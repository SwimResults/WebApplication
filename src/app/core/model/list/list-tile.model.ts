export interface IListTile {
  id: string;
  name: string;
  nameLink?: string;
  badge?: string;
  team?: string;
  teamLink?: string;
  entryType: "athlete" | "team" | undefined;

}
