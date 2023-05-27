import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListComponent } from './event-list.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ElementsModule} from "../../../../shared/elements/elements.module";
import {StartsModule} from "../../../starts";

describe('EventListComponent', () => {
  let component: EventListComponent;
  let fixture: ComponentFixture<EventListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventListComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ElementsModule,
        StartsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
