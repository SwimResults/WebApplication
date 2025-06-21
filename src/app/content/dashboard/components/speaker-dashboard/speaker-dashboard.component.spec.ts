import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SpeakerDashboardComponent} from './speaker-dashboard.component';

import {TranslateModule} from "@ngx-translate/core";
import {provideRouter} from "@angular/router";
import {routes} from "../../../../app.routes";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {OAuthModule} from "angular-oauth2-oidc";

describe('SpeakerDashboardComponent', () => {
  let component: SpeakerDashboardComponent;
  let fixture: ComponentFixture<SpeakerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
            TranslateModule.forRoot(),
            SpeakerDashboardComponent,
            OAuthModule.forRoot()
        ],
        providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
