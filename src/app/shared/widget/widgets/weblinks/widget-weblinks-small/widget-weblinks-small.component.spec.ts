import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetWeblinksSmallComponent } from './widget-weblinks-small.component';
import {RouterTestingModule} from "@angular/router/testing";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {WidgetModule} from "../../../widget.module";
import {TranslateModule} from "@ngx-translate/core";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('WidgetWeblinksSmallComponent', () => {
  let component: WidgetWeblinksSmallComponent;
  let fixture: ComponentFixture<WidgetWeblinksSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [WidgetWeblinksSmallComponent],
    imports: [RouterTestingModule,
        WidgetModule,
        TranslateModule.forRoot()],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(WidgetWeblinksSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
