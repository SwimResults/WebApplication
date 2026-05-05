export interface GenderStats {
    gender: string;
    amount: number;
}

export interface YearStats {
    year: number;
    genders: GenderStats[];
}

export interface StartStatsResponse {
    year_gender_stats?: YearStats[];
    [index: number]: YearStats;
}
