import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageEventComponent} from './page-event.component';
import {RouterTestingModule} from "@angular/router/testing";
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {EventsModule} from "../../events.module";
import {TranslateModule} from "@ngx-translate/core";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('PageEventComponent', () => {
  let component: PageEventComponent;
  let fixture: ComponentFixture<PageEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [RouterTestingModule,
        EventsModule,
        TranslateModule.forRoot(), PageEventComponent],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(PageEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
