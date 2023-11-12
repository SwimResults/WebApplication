import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetNOSmallComponent } from './widget-n-o-small.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateModule} from "@ngx-translate/core";
import {ElementsModule} from "../../../elements/elements.module";
import {MatIconModule} from "@angular/material/icon";

describe('WidgetNOSmallComponent', () => {
  let component: WidgetNOSmallComponent;
  let fixture: ComponentFixture<WidgetNOSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetNOSmallComponent ],
        imports: [
            HttpClientTestingModule,
            RouterTestingModule,
            TranslateModule.forRoot(),
            ElementsModule,
            MatIconModule
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetNOSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
