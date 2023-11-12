import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetFileResultListSmallComponent } from './widget-file-result-list-small.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateModule} from "@ngx-translate/core";

describe('WidgetFileResultListSmallComponent', () => {
  let component: WidgetFileResultListSmallComponent;
  let fixture: ComponentFixture<WidgetFileResultListSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetFileResultListSmallComponent ],
        imports: [
            HttpClientTestingModule,
            RouterTestingModule,
            TranslateModule.forRoot()
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetFileResultListSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
