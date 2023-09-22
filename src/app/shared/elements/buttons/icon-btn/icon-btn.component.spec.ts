import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconBtnComponent } from './icon-btn.component';

describe('IconBtnComponent', () => {
  let component: IconBtnComponent;
  let fixture: ComponentFixture<IconBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
