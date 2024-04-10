import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardViewComponent } from './dashboard-view.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {CoreModule} from "../../../../core/core.module";
import {RouterTestingModule} from "@angular/router/testing";
import {WidgetModule} from "../../../../shared/widget/widget.module";
import {OAuthModule} from "angular-oauth2-oidc";

describe('DashboardViewComponent', () => {
  let component: DashboardViewComponent;
  let fixture: ComponentFixture<DashboardViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardViewComponent ],
        imports: [
            HttpClientTestingModule,
            CoreModule,
            RouterTestingModule,
            WidgetModule,
            OAuthModule.forRoot()
        ]
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
