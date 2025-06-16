import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FlatBtnComponent} from './flat-btn.component';

describe('FlatBtnComponent', () => {
  let component: FlatBtnComponent;
  let fixture: ComponentFixture<FlatBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [FlatBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlatBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
