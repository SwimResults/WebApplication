export interface AgeGroup {
    _id: string;
    meeting: string;
    event: number;
    default: boolean;
    gender: string;
    min_age: string;
    max_age: string;
    ages: number[];
    is_year: boolean;
    name: string;
}
