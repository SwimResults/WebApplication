import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivetimingHeaderComponent } from './livetiming-header.component';
import {MatSliderModule} from "@angular/material/slider";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

describe('LivetimingHeaderComponent', () => {
  let component: LivetimingHeaderComponent;
  let fixture: ComponentFixture<LivetimingHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivetimingHeaderComponent ],
      imports: [
        MatSliderModule,
        MatSlideToggleModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivetimingHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
