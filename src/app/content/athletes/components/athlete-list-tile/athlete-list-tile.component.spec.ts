import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteListTileComponent } from './athlete-list-tile.component';

describe('AthleteListTileComponent', () => {
  let component: AthleteListTileComponent;
  let fixture: ComponentFixture<AthleteListTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthleteListTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AthleteListTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
