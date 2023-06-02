import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListHeatComponent } from './event-list-heat.component';

describe('EventListHeatComponent', () => {
  let component: EventListHeatComponent;
  let fixture: ComponentFixture<EventListHeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventListHeatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventListHeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
