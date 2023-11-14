import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetDelaySmallComponent } from './widget-delay-small.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateModule} from "@ngx-translate/core";
import {ElementsModule} from "../../../../elements/elements.module";

describe('WidgetDelaySmallComponent', () => {
  let component: WidgetDelaySmallComponent;
  let fixture: ComponentFixture<WidgetDelaySmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetDelaySmallComponent ],
        imports: [
            HttpClientTestingModule,
            RouterTestingModule,
            TranslateModule.forRoot(),
            ElementsModule
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetDelaySmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
