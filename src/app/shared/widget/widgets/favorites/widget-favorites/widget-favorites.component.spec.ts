import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetFavoritesComponent } from './widget-favorites.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {WidgetModule} from "../../../widget.module";
import {TranslateModule} from "@ngx-translate/core";

describe('WidgetFavoritesComponent', () => {
  let component: WidgetFavoritesComponent;
  let fixture: ComponentFixture<WidgetFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetFavoritesComponent ],
        imports: [
            HttpClientTestingModule,
            RouterTestingModule,
            WidgetModule,
            TranslateModule.forRoot()
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
