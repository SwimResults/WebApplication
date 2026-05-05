import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { StatsParticipantsAgesComponent } from './stats-participants-ages.component';
import { RouteService } from '../../../../core/service/route.service';
import { StartService } from '../../../../core/service/api';

describe('StatsParticipantsAgesComponent', () => {
  let component: StatsParticipantsAgesComponent;
  let fixture: ComponentFixture<StatsParticipantsAgesComponent>;
  let startServiceSpy: jasmine.SpyObj<StartService>;
  let translateService: TranslateService;

  beforeEach(async () => {
    startServiceSpy = jasmine.createSpyObj<StartService>('StartService', ['getStartsByMeeting']);
    startServiceSpy.getStartsByMeeting.and.returnValue(of([
      { athlete_year: 2001, athlete: 'athlete-a' },
      { athlete_year: 2001, athlete: 'athlete-a' },
      { athlete_year: 2001, athlete: 'athlete-b' },
      { athlete_year: 2002, athlete: 'athlete-c' }
    ] as any));

    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), MatProgressBarModule, StatsParticipantsAgesComponent],
      providers: [
        {
          provide: RouteService,
          useValue: {
            currentMeetingId: of('meeting-1')
          }
        },
        {
          provide: StartService,
          useValue: startServiceSpy
        }
      ]
    })
    .compileComponents();

    translateService = TestBed.inject(TranslateService);
    translateService.setTranslation('de', {
      STATS: {
        PARTICIPANTS_AGES: {
          TITLE: 'Teilnehmer nach Jahrgang',
          YEAR: 'Jahrgang',
          PARTICIPANTS: 'Teilnehmer',
          STARTS: 'Starts',
          TOTAL: 'Summe'
        }
      }
    }, true);
    translateService.use('de');

    fixture = TestBed.createComponent(StatsParticipantsAgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
