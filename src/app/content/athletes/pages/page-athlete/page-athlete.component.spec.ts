import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PageAthleteComponent} from './page-athlete.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {provideRouter} from "@angular/router";
import {routes} from "../../../../app.routes";

describe('PageAthleteComponent', () => {
  let component: PageAthleteComponent;
  let fixture: ComponentFixture<PageAthleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
            PageAthleteComponent],
        providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting(), provideRouter(routes)]
})
    .compileComponents();

    fixture = TestBed.createComponent(PageAthleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
