import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EventIncidentComponent} from './event-incident.component';

describe('EventIncidentComponent', () => {
  let component: EventIncidentComponent;
  let fixture: ComponentFixture<EventIncidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [EventIncidentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
