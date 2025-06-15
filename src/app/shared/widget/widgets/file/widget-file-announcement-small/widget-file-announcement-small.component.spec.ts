import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetFileAnnouncementSmallComponent } from './widget-file-announcement-small.component';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateModule} from "@ngx-translate/core";
import {WidgetModule} from "../../../widget.module";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('WidgetFileAnnouncementSmallComponent', () => {
  let component: WidgetFileAnnouncementSmallComponent;
  let fixture: ComponentFixture<WidgetFileAnnouncementSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [WidgetFileAnnouncementSmallComponent],
    imports: [RouterTestingModule,
        TranslateModule.forRoot(),
        WidgetModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(WidgetFileAnnouncementSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
