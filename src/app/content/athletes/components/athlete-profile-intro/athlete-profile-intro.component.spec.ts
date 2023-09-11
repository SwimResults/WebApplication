import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteProfileIntroComponent } from './athlete-profile-intro.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AthleteProfileIntroComponent', () => {
  let component: AthleteProfileIntroComponent;
  let fixture: ComponentFixture<AthleteProfileIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthleteProfileIntroComponent ],
      imports: [
        HttpClientTestingModule
      ]
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
