import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetNOSmallComponent} from './widget-n-o-small.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateModule} from "@ngx-translate/core";
import {ElementsModule} from "../../../elements/elements.module";
import {MatIconModule} from "@angular/material/icon";
import {WidgetModule} from "../../widget.module";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('WidgetNOSmallComponent', () => {
  let component: WidgetNOSmallComponent;
  let fixture: ComponentFixture<WidgetNOSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [RouterTestingModule,
        TranslateModule.forRoot(),
        ElementsModule,
        MatIconModule,
        WidgetModule, WidgetNOSmallComponent],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(WidgetNOSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
