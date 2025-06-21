import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetTimeInfoMediumComponent} from './widget-time-info-medium.component';

describe('WidgetTimeInfoMediumComponent', () => {
  let component: WidgetTimeInfoMediumComponent;
  let fixture: ComponentFixture<WidgetTimeInfoMediumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [WidgetTimeInfoMediumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetTimeInfoMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
