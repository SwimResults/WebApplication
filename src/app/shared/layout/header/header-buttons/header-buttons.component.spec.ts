import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderButtonsComponent} from './header-buttons.component';
import {TranslateModule} from "@ngx-translate/core";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {OAuthModule} from "angular-oauth2-oidc";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {MatDividerModule} from "@angular/material/divider";
import {CoreModule} from "../../../../core/core.module";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('HeaderButtonsComponent', () => {
  let component: HeaderButtonsComponent;
  let fixture: ComponentFixture<HeaderButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [TranslateModule.forRoot(),
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        OAuthModule.forRoot(),
        MatDividerModule,
        CoreModule, HeaderButtonsComponent],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
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
