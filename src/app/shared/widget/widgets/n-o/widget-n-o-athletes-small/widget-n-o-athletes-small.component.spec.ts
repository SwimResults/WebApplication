import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetNOAthletesSmallComponent } from './widget-n-o-athletes-small.component';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateModule} from "@ngx-translate/core";
import {ElementsModule} from "../../../../elements/elements.module";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('WidgetNOAthletesSmallComponent', () => {
  let component: WidgetNOAthletesSmallComponent;
  let fixture: ComponentFixture<WidgetNOAthletesSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [WidgetNOAthletesSmallComponent],
    imports: [RouterTestingModule,
        TranslateModule.forRoot(),
        ElementsModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(WidgetNOAthletesSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
