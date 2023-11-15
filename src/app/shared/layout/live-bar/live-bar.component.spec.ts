import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveBarComponent } from './live-bar.component';

describe('LiveBarComponent', () => {
  let component: LiveBarComponent;
  let fixture: ComponentFixture<LiveBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
