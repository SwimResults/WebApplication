import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetWeblinksSmallComponent } from './widget-weblinks-small.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {WidgetModule} from "../../../widget.module";
import {TranslateModule} from "@ngx-translate/core";

describe('WidgetWeblinksSmallComponent', () => {
  let component: WidgetWeblinksSmallComponent;
  let fixture: ComponentFixture<WidgetWeblinksSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WidgetWeblinksSmallComponent],
        imports:[
            RouterTestingModule,
            HttpClientTestingModule,
            WidgetModule,
            TranslateModule.forRoot()
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetWeblinksSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
