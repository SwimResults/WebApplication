import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetSponsorsMediumComponent} from './widget-sponsors-medium.component';
import {TranslateModule} from "@ngx-translate/core";
import {RouterTestingModule} from "@angular/router/testing";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {MatIconModule} from "@angular/material/icon";
import {ElementsModule} from "../../../../elements/elements.module";
import {WidgetModule} from "../../../widget.module";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('WidgetSponsorsMediumComponent', () => {
  let component: WidgetSponsorsMediumComponent;
  let fixture: ComponentFixture<WidgetSponsorsMediumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [RouterTestingModule,
        TranslateModule.forRoot(),
        ElementsModule,
        MatIconModule,
        WidgetModule, WidgetSponsorsMediumComponent],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(WidgetSponsorsMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
