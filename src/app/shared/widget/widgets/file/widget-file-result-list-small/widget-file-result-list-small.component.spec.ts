import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetFileResultListSmallComponent } from './widget-file-result-list-small.component';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateModule} from "@ngx-translate/core";
import {WidgetModule} from "../../../widget.module";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('WidgetFileResultListSmallComponent', () => {
  let component: WidgetFileResultListSmallComponent;
  let fixture: ComponentFixture<WidgetFileResultListSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [WidgetFileResultListSmallComponent],
    imports: [RouterTestingModule,
        TranslateModule.forRoot(),
        WidgetModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(WidgetFileResultListSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
