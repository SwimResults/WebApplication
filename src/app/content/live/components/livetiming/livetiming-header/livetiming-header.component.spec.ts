import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivetimingHeaderComponent } from './livetiming-header.component';

describe('LivetimingHeaderComponent', () => {
  let component: LivetimingHeaderComponent;
  let fixture: ComponentFixture<LivetimingHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivetimingHeaderComponent ]
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
