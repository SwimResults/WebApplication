import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetLoginRequiredComponent} from './widget-login-required.component';
import {OAuthModule} from "angular-oauth2-oidc";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('WidgetLoginRequiredComponent', () => {
  let component: WidgetLoginRequiredComponent;
  let fixture: ComponentFixture<WidgetLoginRequiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [OAuthModule.forRoot(),
        TranslateModule.forRoot(), WidgetLoginRequiredComponent],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
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
