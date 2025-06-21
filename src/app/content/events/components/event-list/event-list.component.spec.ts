import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EventListComponent} from './event-list.component';

import {provideHttpClientTesting} from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {routes} from "../../../../app.routes";

describe('EventListComponent', () => {
  let component: EventListComponent;
  let fixture: ComponentFixture<EventListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
        TranslateModule.forRoot(), EventListComponent],
        providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
})
    .compileComponents();

    fixture = TestBed.createComponent(EventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
