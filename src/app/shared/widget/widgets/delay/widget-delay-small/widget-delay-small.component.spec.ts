import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetDelaySmallComponent} from './widget-delay-small.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateModule} from "@ngx-translate/core";
import {ElementsModule} from "../../../../elements/elements.module";
import {WidgetModule} from "../../../widget.module";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('WidgetDelaySmallComponent', () => {
  let component: WidgetDelaySmallComponent;
  let fixture: ComponentFixture<WidgetDelaySmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [RouterTestingModule,
        TranslateModule.forRoot(),
        ElementsModule,
        WidgetModule, WidgetDelaySmallComponent],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(WidgetDelaySmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
