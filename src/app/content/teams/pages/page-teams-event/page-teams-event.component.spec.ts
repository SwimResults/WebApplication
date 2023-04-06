import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTeamsEventComponent } from './page-teams-event.component';

describe('PageTeamsEventComponent', () => {
  let component: PageTeamsEventComponent;
  let fixture: ComponentFixture<PageTeamsEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTeamsEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTeamsEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
