import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivetimingControlsComponent } from './livetiming-controls.component';

describe('LivetimingControlsComponent', () => {
  let component: LivetimingControlsComponent;
  let fixture: ComponentFixture<LivetimingControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivetimingControlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivetimingControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
