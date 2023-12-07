import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventListPartComponent } from './event-list-part.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ElementsModule} from "../../../../shared/elements/elements.module";
import {StartsModule} from "../../../starts";
import {TranslateModule} from "@ngx-translate/core";

describe('EventListPartComponent', () => {
  let component: EventListPartComponent;
  let fixture: ComponentFixture<EventListPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventListPartComponent],
        imports: [

            RouterTestingModule,
            HttpClientTestingModule,
            ElementsModule,
            StartsModule,
            TranslateModule.forRoot()
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventListPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
