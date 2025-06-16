import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LivetimingTableComponent} from './livetiming-table.component';

describe('LivetimingTableComponent', () => {
  let component: LivetimingTableComponent;
  let fixture: ComponentFixture<LivetimingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [LivetimingTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivetimingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
