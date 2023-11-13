import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetNOHeatsSmallComponent } from './widget-n-o-heats-small.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateModule} from "@ngx-translate/core";
import {ElementsModule} from "../../../../elements/elements.module";

describe('WidgetNOHeatsSmallComponent', () => {
  let component: WidgetNOHeatsSmallComponent;
  let fixture: ComponentFixture<WidgetNOHeatsSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetNOHeatsSmallComponent ],
        imports: [
            HttpClientTestingModule,
            RouterTestingModule,
            TranslateModule.forRoot(),
            ElementsModule
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetNOHeatsSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
