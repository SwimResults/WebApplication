import {ComponentFixture, TestBed} from '@angular/core/testing';

import {VrComponent} from './vr.component';

describe('VrComponent', () => {
  let component: VrComponent;
  let fixture: ComponentFixture<VrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [VrComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
