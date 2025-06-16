import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetNOHeatsSmallComponent} from './widget-n-o-heats-small.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateModule} from "@ngx-translate/core";
import {ElementsModule} from "../../../../elements/elements.module";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('WidgetNOHeatsSmallComponent', () => {
  let component: WidgetNOHeatsSmallComponent;
  let fixture: ComponentFixture<WidgetNOHeatsSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [RouterTestingModule,
        TranslateModule.forRoot(),
        ElementsModule, WidgetNOHeatsSmallComponent],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(WidgetNOHeatsSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
