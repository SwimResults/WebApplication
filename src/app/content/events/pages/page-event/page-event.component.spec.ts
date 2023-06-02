import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEventComponent } from './page-event.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {EventsModule} from "../../events.module";
import {TranslateModule} from "@ngx-translate/core";

describe('PageEventComponent', () => {
  let component: PageEventComponent;
  let fixture: ComponentFixture<PageEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageEventComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        EventsModule,
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
