import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DashboardViewComponent} from './dashboard-view.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {CoreModule} from "../../../../core/core.module";

import {OAuthModule} from "angular-oauth2-oidc";
import {MatIconModule} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {routes} from "../../../../app.routes";

describe('DashboardViewComponent', () => {
  let component: DashboardViewComponent;
  let fixture: ComponentFixture<DashboardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [CoreModule,
        OAuthModule.forRoot(),
        MatIconModule,
        TranslateModule.forRoot(), DashboardViewComponent],
        providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
})
    .compileComponents();

    fixture = TestBed.createComponent(DashboardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
