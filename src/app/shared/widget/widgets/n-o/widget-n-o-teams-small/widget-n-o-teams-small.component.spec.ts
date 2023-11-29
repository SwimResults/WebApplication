import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetNOTeamsSmallComponent } from './widget-n-o-teams-small.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";
import {RouterTestingModule} from "@angular/router/testing";
import {ElementsModule} from "../../../../elements/elements.module";

describe('WidgetNOTeamsSmallComponent', () => {
  let component: WidgetNOTeamsSmallComponent;
  let fixture: ComponentFixture<WidgetNOTeamsSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetNOTeamsSmallComponent ],
        imports: [
            HttpClientTestingModule,
            RouterTestingModule,
            TranslateModule.forRoot(),
            ElementsModule
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetNOTeamsSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
