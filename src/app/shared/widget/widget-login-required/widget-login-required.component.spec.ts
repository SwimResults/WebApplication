import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetLoginRequiredComponent } from './widget-login-required.component';
import {OAuthModule} from "angular-oauth2-oidc";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {WidgetModule} from "../widget.module";
import {TranslateModule} from "@ngx-translate/core";

describe('WidgetLoginRequiredComponent', () => {
  let component: WidgetLoginRequiredComponent;
  let fixture: ComponentFixture<WidgetLoginRequiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetLoginRequiredComponent ],
        imports: [
            OAuthModule.forRoot(),
            HttpClientTestingModule,
            WidgetModule,
            TranslateModule.forRoot()
        ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetLoginRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
