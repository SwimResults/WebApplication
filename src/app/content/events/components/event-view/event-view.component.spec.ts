import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventViewComponent } from './event-view.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";
import {ElementsModule} from "../../../../shared/elements/elements.module";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";

describe('EventViewComponent', () => {
  let component: EventViewComponent;
  let fixture: ComponentFixture<EventViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventViewComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ElementsModule,
        MatButtonToggleModule,
        TranslateModule.forRoot(),
        MatIconModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
