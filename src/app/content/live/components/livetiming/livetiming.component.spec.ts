import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivetimingComponent } from './livetiming.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {LiveModule} from "../../live.module";

describe('LivetimingComponent', () => {
  let component: LivetimingComponent;
  let fixture: ComponentFixture<LivetimingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivetimingComponent ],
      imports: [
        HttpClientTestingModule,
        LiveModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivetimingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
