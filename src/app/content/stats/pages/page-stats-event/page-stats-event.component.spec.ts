import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageStatsEventComponent} from './page-stats-event.component';
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideRouter} from "@angular/router";
import {routes} from "../../../../app.routes";
import {TranslateModule} from "@ngx-translate/core";

describe('PageStatsEventComponent', () => {
  let component: PageStatsEventComponent;
  let fixture: ComponentFixture<PageStatsEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
            PageStatsEventComponent,
            TranslateModule.forRoot(),
        ],
        providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageStatsEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
