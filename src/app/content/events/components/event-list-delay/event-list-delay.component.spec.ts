import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListDelayComponent } from './event-list-delay.component';

describe('EventListDelayComponent', () => {
  let component: EventListDelayComponent;
  let fixture: ComponentFixture<EventListDelayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventListDelayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventListDelayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
