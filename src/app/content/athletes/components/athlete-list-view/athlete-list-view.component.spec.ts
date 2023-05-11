import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteListViewComponent } from './athlete-list-view.component';

describe('AthleteListViewComponent', () => {
  let component: AthleteListViewComponent;
  let fixture: ComponentFixture<AthleteListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthleteListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
