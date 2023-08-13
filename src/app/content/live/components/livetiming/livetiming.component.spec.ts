import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivetimingComponent } from './livetiming.component';

describe('LivetimingComponent', () => {
  let component: LivetimingComponent;
  let fixture: ComponentFixture<LivetimingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivetimingComponent ]
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
