import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetUserSmallComponent } from './widget-user-small.component';

describe('WidgetUserSmallComponent', () => {
  let component: WidgetUserSmallComponent;
  let fixture: ComponentFixture<WidgetUserSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetUserSmallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetUserSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
