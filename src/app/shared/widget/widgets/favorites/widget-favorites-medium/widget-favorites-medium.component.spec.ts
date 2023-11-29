import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetFavoritesMediumComponent } from './widget-favorites-medium.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {WidgetModule} from "../../../widget.module";
import {TranslateModule} from "@ngx-translate/core";

describe('WidgetFavoritesMediumComponent', () => {
  let component: WidgetFavoritesMediumComponent;
  let fixture: ComponentFixture<WidgetFavoritesMediumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetFavoritesMediumComponent ],
        imports: [
            HttpClientTestingModule,
            RouterTestingModule,
            WidgetModule,
            TranslateModule.forRoot()
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetFavoritesMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
