import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderButtonsComponent } from './header-buttons.component';
import {TranslateModule} from "@ngx-translate/core";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {OAuthModule} from "angular-oauth2-oidc";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatDividerModule} from "@angular/material/divider";

describe('HeaderButtonsComponent', () => {
  let component: HeaderButtonsComponent;
  let fixture: ComponentFixture<HeaderButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderButtonsComponent ],
      imports: [
        TranslateModule.forRoot(),
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        OAuthModule.forRoot(),
        HttpClientTestingModule,
        MatDividerModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
