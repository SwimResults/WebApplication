import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetMapMediumComponent } from './widget-map-medium.component';

describe('WidgetMapMediumComponent', () => {
  let component: WidgetMapMediumComponent;
  let fixture: ComponentFixture<WidgetMapMediumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetMapMediumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetMapMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
