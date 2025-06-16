import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WidgetTileComponent} from './widget-tile.component';

describe('WidgetTileComponent', () => {
  let component: WidgetTileComponent;
  let fixture: ComponentFixture<WidgetTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [WidgetTileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WidgetTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
