import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetNOStartsSmallComponent } from './widget-n-o-starts-small.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateModule} from "@ngx-translate/core";
import {ElementsModule} from "../../../../elements/elements.module";

describe('WidgetNOStartsSmallComponent', () => {
  let component: WidgetNOStartsSmallComponent;
  let fixture: ComponentFixture<WidgetNOStartsSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetNOStartsSmallComponent ],
        imports: [
            HttpClientTestingModule,
            RouterTestingModule,
            TranslateModule.forRoot(),
            ElementsModule
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetNOStartsSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
