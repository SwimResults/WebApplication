import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetFileStartListSmallComponent } from './widget-file-start-list-small.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateModule} from "@ngx-translate/core";
import {WidgetModule} from "../../../widget.module";

describe('WidgetFileStartListSmallComponent', () => {
  let component: WidgetFileStartListSmallComponent;
  let fixture: ComponentFixture<WidgetFileStartListSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetFileStartListSmallComponent ],
        imports: [
            HttpClientTestingModule,
            RouterTestingModule,
            TranslateModule.forRoot(),
            WidgetModule
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetFileStartListSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
