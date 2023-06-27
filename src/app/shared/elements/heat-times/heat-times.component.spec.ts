import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatTimesComponent } from './heat-times.component';

describe('HeatTimesComponent', () => {
  let component: HeatTimesComponent;
  let fixture: ComponentFixture<HeatTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatTimesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeatTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
