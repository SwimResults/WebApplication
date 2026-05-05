import {Component, inject, OnDestroy} from '@angular/core';
import {Subscription} from "rxjs";
import {TranslateModule} from "@ngx-translate/core";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {RouteService} from "../../../../core/service/route.service";
import {StartService} from "../../../../core/service/api";
import {YearStats, GenderStats} from "../../../../core/model/start/start-stats.model";

@Component({
  selector: 'sr-stats-participants-ages',
    imports: [
                TranslateModule,
        MatProgressBarModule,
    ],
  templateUrl: './stats-participants-ages.component.html',
  styleUrl: './stats-participants-ages.component.scss'
})
export class StatsParticipantsAgesComponent implements OnDestroy {
    routeService: RouteService = inject(RouteService);
    startService: StartService = inject(StartService);

    meetingId?: string;
    meetingIdSubscription: Subscription;

    yearStats: YearStats[] = [];
    allGenders: string[] = [];
    summary = {totalStarts: 0};

    fetchingStarts = false;
    loadingProgress = 0;
    private loadingProgressInterval?: number;

    constructor() {
        this.meetingIdSubscription = this.routeService.currentMeetingId.subscribe(data => {
            this.meetingId = data;
            this.fetchStats();
        })
    }

    fetchStats() {
        if (!this.meetingId) return;
        this.fetchingStarts = true;
        this.loadingProgress = 0;
        this.startLoadingProgress();
        this.startService.getStartStatsByMeeting(this.meetingId).subscribe(
            data => {
                // Handle both cases: direct array or wrapped in year_gender_stats
                const statsArray = (Array.isArray(data) ? data : data?.year_gender_stats) || [];

                if (statsArray.length === 0) {
                    this.yearStats = [];
                    this.allGenders = [];
                    this.summary = { totalStarts: 0 };
                    this.loadingProgress = 100;
                    this.stopLoadingProgress();
                    this.fetchingStarts = false;
                    return;
                }

                this.yearStats = statsArray;
                this.yearStats.sort((a, b) => a.year - b.year);

                // Extract all unique genders across all years
                const gendersSet = new Set<string>();
                this.yearStats.forEach(year => {
                    year.genders.forEach(g => gendersSet.add(g.gender));
                });
                this.allGenders = Array.from(gendersSet);

                // Calculate total starts
                this.summary = {
                    totalStarts: this.yearStats.reduce((yearSum, year) => {
                        return yearSum + year.genders.reduce((genderSum, gender) => genderSum + gender.amount, 0);
                    }, 0)
                };

                this.loadingProgress = 100;
                this.stopLoadingProgress();
                this.fetchingStarts = false;
            },
            error => {
                console.error('Error fetching start stats:', error);
                this.yearStats = [];
                this.allGenders = [];
                this.summary = { totalStarts: 0 };
                this.loadingProgress = 100;
                this.stopLoadingProgress();
                this.fetchingStarts = false;
            }
        )
    }

    getGenderAmount(genders: GenderStats[], targetGender: string): number {
        const found = genders.find(g => g.gender === targetGender);
        return found ? found.amount : 0;
    }

    getYearTotal(genders: GenderStats[]): number {
        return genders.reduce((sum, g) => sum + g.amount, 0);
    }

    getGenderColumnTotal(gender: string): number {
        return this.yearStats.reduce((sum, year) => sum + this.getGenderAmount(year.genders, gender), 0);
    }

    private startLoadingProgress(): void {
        this.stopLoadingProgress();
        this.loadingProgressInterval = window.setInterval(() => {
            if (this.loadingProgress >= 90) {
                return;
            }

            this.loadingProgress = Math.min(this.loadingProgress + 5, 90);
        }, 400);
    }

    private stopLoadingProgress(): void {
        if (this.loadingProgressInterval !== undefined) {
            window.clearInterval(this.loadingProgressInterval);
            this.loadingProgressInterval = undefined;
        }
    }

    ngOnDestroy(): void {
        this.meetingIdSubscription.unsubscribe();
    }
}
