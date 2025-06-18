import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EventListEventComponent} from './event-list-event.component';
import {TranslateModule} from "@ngx-translate/core";
import {provideRouter} from "@angular/router";
import {routes} from "../../../../app.routes";

describe('EventListEventComponent', () => {
  let component: EventListEventComponent;
  let fixture: ComponentFixture<EventListEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
            TranslateModule.forRoot(),
            EventListEventComponent
        ],
        providers: [provideRouter(routes)]
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
