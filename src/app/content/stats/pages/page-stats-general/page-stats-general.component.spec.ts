import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStatsGeneralComponent } from './page-stats-general.component';

describe('PageStatsGeneralComponent', () => {
  let component: PageStatsGeneralComponent;
  let fixture: ComponentFixture<PageStatsGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageStatsGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageStatsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
