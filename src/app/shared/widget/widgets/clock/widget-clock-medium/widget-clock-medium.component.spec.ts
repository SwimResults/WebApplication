import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetClockMediumComponent} from './widget-clock-medium.component';

describe('WidgetClockMediumComponent', () => {
  let component: WidgetClockMediumComponent;
  let fixture: ComponentFixture<WidgetClockMediumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [WidgetClockMediumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetClockMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
