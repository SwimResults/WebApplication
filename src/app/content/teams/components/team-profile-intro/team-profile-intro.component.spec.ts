import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamProfileIntroComponent } from './team-profile-intro.component';

describe('TeamProfileIntroComponent', () => {
  let component: TeamProfileIntroComponent;
  let fixture: ComponentFixture<TeamProfileIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamProfileIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamProfileIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
