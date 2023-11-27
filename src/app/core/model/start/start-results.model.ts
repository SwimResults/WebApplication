import {AgeGroup} from "../meeting/age-group.model";
import {Start} from "./start.model";

export interface StartResults {
    age_group: AgeGroup;
    starts: Start[];
}
