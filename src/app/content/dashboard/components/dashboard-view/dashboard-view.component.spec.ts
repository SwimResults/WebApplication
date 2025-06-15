import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardViewComponent } from './dashboard-view.component';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {CoreModule} from "../../../../core/core.module";
import {RouterTestingModule} from "@angular/router/testing";
import {WidgetModule} from "../../../../shared/widget/widget.module";
import {OAuthModule} from "angular-oauth2-oidc";
import {MatIconModule} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('DashboardViewComponent', () => {
  let component: DashboardViewComponent;
  let fixture: ComponentFixture<DashboardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [DashboardViewComponent],
    imports: [CoreModule,
        RouterTestingModule,
        WidgetModule,
        OAuthModule.forRoot(),
        MatIconModule,
        TranslateModule.forRoot()],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
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
