import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EventListTileComponent} from './event-list-tile.component';

describe('EventListTileComponent', () => {
  let component: EventListTileComponent;
  let fixture: ComponentFixture<EventListTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [EventListTileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventListTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
