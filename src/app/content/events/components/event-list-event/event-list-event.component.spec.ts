import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EventListEventComponent} from './event-list-event.component';
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateModule} from "@ngx-translate/core";

describe('EventListEventComponent', () => {
  let component: EventListEventComponent;
  let fixture: ComponentFixture<EventListEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
        RouterTestingModule,
            TranslateModule.forRoot(),
            EventListEventComponent
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventListEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
