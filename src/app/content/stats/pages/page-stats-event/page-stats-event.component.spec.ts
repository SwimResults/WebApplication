import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageStatsEventComponent} from './page-stats-event.component';

describe('PageStatsEventComponent', () => {
  let component: PageStatsEventComponent;
  let fixture: ComponentFixture<PageStatsEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [PageStatsEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageStatsEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
