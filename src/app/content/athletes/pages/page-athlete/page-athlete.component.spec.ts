import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAthleteComponent } from './page-athlete.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('PageAthleteComponent', () => {
  let component: PageAthleteComponent;
  let fixture: ComponentFixture<PageAthleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAthleteComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
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
