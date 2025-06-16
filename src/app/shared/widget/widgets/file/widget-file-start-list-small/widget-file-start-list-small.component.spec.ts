import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetFileStartListSmallComponent} from './widget-file-start-list-small.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateModule} from "@ngx-translate/core";
import {WidgetModule} from "../../../widget.module";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('WidgetFileStartListSmallComponent', () => {
  let component: WidgetFileStartListSmallComponent;
  let fixture: ComponentFixture<WidgetFileStartListSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [RouterTestingModule,
        TranslateModule.forRoot(),
        WidgetModule, WidgetFileStartListSmallComponent],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(WidgetFileStartListSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
