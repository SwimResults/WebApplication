import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetFileAnnouncementSmallComponent } from './widget-file-announcement-small.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateModule} from "@ngx-translate/core";
import {WidgetModule} from "../../../widget.module";

describe('WidgetFileAnnouncementSmallComponent', () => {
  let component: WidgetFileAnnouncementSmallComponent;
  let fixture: ComponentFixture<WidgetFileAnnouncementSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetFileAnnouncementSmallComponent ],
        imports: [
            HttpClientTestingModule,
            RouterTestingModule,
            TranslateModule.forRoot(),
            WidgetModule
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetFileAnnouncementSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
