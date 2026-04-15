import { Component, OnInit, inject } from '@angular/core';
import {MeetingImpl, MeetingStates} from "../../../../core/model/meeting/meeting.model";
import {MeetingService} from "../../../../core/service/api";
import {FetchingModel} from "../../../../core/model/common/fetching.model";
import {SpinnerComponent} from '../../../../shared/elements/spinner/spinner.component';
import {MeetingListTileComponent} from '../meeting-list-tile/meeting-list-tile.component';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-meeting-list',
    templateUrl: './meeting-list.component.html',
    styleUrls: ['./meeting-list.component.scss'],
    imports: [SpinnerComponent, MeetingListTileComponent, TranslateModule]
})
export class MeetingListComponent implements OnInit{
  private meetingService = inject(MeetingService);


  allMeetings: MeetingImpl[] = [];
  filteredMeetings: MeetingImpl[] = [];
  meetingYears: Map<number, MeetingImpl[]> = new Map<number, MeetingImpl[]>();
  availableTags: string[] = [];
  selectedTags: string[] = [];
  currentMeetings: MeetingImpl[] = [];
  nextUpcomingMeetings: MeetingImpl[] = [];

  fetching: FetchingModel = {fetching: false};


  ngOnInit(): void {
    this.fetchMeetings();
  }


  fetchMeetings() {
    this.fetching.fetching = true;
    this.meetingService.getMeetings().subscribe({next: data => {
      if (data) {
        const meetings: MeetingImpl[] = [];
        for (const meet of data) {
          const m = new MeetingImpl(meet);
          if (m.hasState(MeetingStates.HIDDEN) || m.unpublished) continue;
          meetings.push(m);
        }
        this.allMeetings = meetings.sort((a, b) => b.getStartDate().getTime() - a.getStartDate().getTime());
        this.availableTags = this.getUniqueTags(this.allMeetings);
        this.updateFilteredData();
      }
      this.fetching.fetching = false;
    }, error: _ => {
        //this.fetching = false;
    }});
  }

  toggleTag(tag: string): void {
    if (this.selectedTags.includes(tag)) {
      this.selectedTags = this.selectedTags.filter(t => t !== tag);
    } else {
      this.selectedTags = [...this.selectedTags, tag];
    }
    this.updateFilteredData();
  }

  clearTagFilter(): void {
    this.selectedTags = [];
    this.updateFilteredData();
  }

  hasTagSelected(tag: string): boolean {
    return this.selectedTags.includes(tag);
  }

  private updateFilteredData(): void {
    this.filteredMeetings = this.getFilteredMeetings();
    this.meetingYears = this.buildMeetingYears(this.filteredMeetings);
    this.currentMeetings = this.getCurrentMeetings(this.filteredMeetings);
    this.nextUpcomingMeetings = this.getUpcomingMeetings(this.filteredMeetings);
  }

  private getFilteredMeetings(): MeetingImpl[] {
    if (this.selectedTags.length === 0) {
      return [...this.allMeetings];
    }
    return this.allMeetings.filter(meeting => {
      const tags = meeting.tags || [];
      return this.selectedTags.some(tag => tags.includes(tag));
    });
  }

  private buildMeetingYears(meetings: MeetingImpl[]): Map<number, MeetingImpl[]> {
    const years = new Map<number, MeetingImpl[]>();
    for (const meeting of meetings) {
      const year = meeting.getStartDate().getFullYear();
      if (!years.get(year)) {
        years.set(year, []);
      }
      years.get(year)?.push(meeting);
    }
    for (const [year, yearMeetings] of years.entries()) {
      years.set(year, yearMeetings.sort((a, b) => b.getStartDate().getTime() - a.getStartDate().getTime()));
    }
    return new Map([...years.entries()].sort((a, b) => b[0] - a[0]));
  }

  private getCurrentMeetings(meetings: MeetingImpl[]): MeetingImpl[] {
    const now = Date.now();
    return meetings
      .filter(meeting => {
        const start = meeting.getStartDate().getTime();
        const end = meeting.getEndDate().getTime();
        return start <= now && now <= end;
      })
      .sort((a, b) => a.getEndDate().getTime() - b.getEndDate().getTime());
  }

  private getUpcomingMeetings(meetings: MeetingImpl[]): MeetingImpl[] {
    const now = Date.now();
    return meetings
      .filter(meeting => meeting.getStartDate().getTime() > now)
      .sort((a, b) => a.getStartDate().getTime() - b.getStartDate().getTime())
      .slice(0, 3);
  }

  private getUniqueTags(meetings: MeetingImpl[]): string[] {
    const tags = new Set<string>();
    for (const meeting of meetings) {
      for (const tag of meeting.tags || []) {
        if (tag && tag.trim().length > 0) {
          tags.add(tag.trim());
        }
      }
    }
    return [...tags].sort((a, b) => a.localeCompare(b));
  }
}
