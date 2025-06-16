import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AthleteStartsComponent} from './athlete-starts.component';
import {provideHttpClientTesting} from "@angular/common/http/testing";
import {StartsModule} from "../../../starts";
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

describe('AthleteStartsComponent', () => {
  let component: AthleteStartsComponent;
  let fixture: ComponentFixture<AthleteStartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [StartsModule, AthleteStartsComponent],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(AthleteStartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
