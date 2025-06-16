import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetNOStartsSmallComponent} from './widget-n-o-starts-small.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateModule} from "@ngx-translate/core";
import {ElementsModule} from "../../../../elements/elements.module";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('WidgetNOStartsSmallComponent', () => {
  let component: WidgetNOStartsSmallComponent;
  let fixture: ComponentFixture<WidgetNOStartsSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [RouterTestingModule,
        TranslateModule.forRoot(),
        ElementsModule, WidgetNOStartsSmallComponent],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(WidgetNOStartsSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
