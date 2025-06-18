import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminMainViewComponent} from './admin-main-view.component';
import {TranslateModule} from "@ngx-translate/core";
import {provideRouter} from "@angular/router";
import {routes} from "../../../../app.routes";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";

describe('AdminMainViewComponent', () => {
  let component: AdminMainViewComponent;
  let fixture: ComponentFixture<AdminMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
            TranslateModule.forRoot(),
            AdminMainViewComponent
        ],
        providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
