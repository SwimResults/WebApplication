import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteStartsComponent } from './athlete-starts.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AthleteStartsComponent', () => {
  let component: AthleteStartsComponent;
  let fixture: ComponentFixture<AthleteStartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthleteStartsComponent ],
      imports: [
        HttpClientTestingModule
      ]
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
