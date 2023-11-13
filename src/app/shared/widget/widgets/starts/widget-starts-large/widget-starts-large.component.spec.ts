import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetStartsLargeComponent } from './widget-starts-large.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";
import {MatIconModule} from "@angular/material/icon";
import {WidgetModule} from "../../../widget.module";

describe('WidgetStartsLargeComponent', () => {
  let component: WidgetStartsLargeComponent;
  let fixture: ComponentFixture<WidgetStartsLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetStartsLargeComponent ],
        imports: [
            HttpClientTestingModule,
            TranslateModule.forRoot(),
            MatIconModule,
            WidgetModule
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetStartsLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
