import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEventsComponent } from './page-events.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ElementsModule} from "../../../../shared/elements/elements.module";
import {StartsModule} from "../../../starts";
import {EventsModule} from "../../events.module";
import {TranslateModule} from "@ngx-translate/core";

describe('PageEventsComponent', () => {
  let component: PageEventsComponent;
  let fixture: ComponentFixture<PageEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEventsComponent ],
      imports: [
        EventsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        ElementsModule,
        StartsModule,
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
