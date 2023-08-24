import {Follower} from "./follower.model";

export interface User {
  _id: string;
  keycloak_id: string;
  following: Follower[];
}
