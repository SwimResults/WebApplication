import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetStartsLargeComponent } from './widget-starts-large.component';

describe('WidgetStartsLargeComponent', () => {
  let component: WidgetStartsLargeComponent;
  let fixture: ComponentFixture<WidgetStartsLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetStartsLargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetStartsLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
