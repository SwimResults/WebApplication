import {Address} from "./address.model";
import {Contact} from "./contact.model";
import {ColorSet} from "./color-set.model";

export interface Team {
  _id: string;
  name: string;
  alias: string[];
  address: Address;
  country: string;
  contact: Contact;
  website: string;
  logo_url: string;
  color_set: ColorSet;
}
