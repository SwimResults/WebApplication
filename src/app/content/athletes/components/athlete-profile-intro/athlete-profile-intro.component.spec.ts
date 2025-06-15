import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteProfileIntroComponent } from './athlete-profile-intro.component';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('AthleteProfileIntroComponent', () => {
  let component: AthleteProfileIntroComponent;
  let fixture: ComponentFixture<AthleteProfileIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [AthleteProfileIntroComponent],
    imports: [],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
})
    .compileComponents();

    fixture = TestBed.createComponent(AthleteProfileIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
