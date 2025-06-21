import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetNOTeamsSmallComponent} from './widget-n-o-teams-small.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";

import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {routes} from "../../../../../app.routes";

describe('WidgetNOTeamsSmallComponent', () => {
  let component: WidgetNOTeamsSmallComponent;
  let fixture: ComponentFixture<WidgetNOTeamsSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
            TranslateModule.forRoot(), WidgetNOTeamsSmallComponent],
        providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
})
    .compileComponents();

    fixture = TestBed.createComponent(WidgetNOTeamsSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
