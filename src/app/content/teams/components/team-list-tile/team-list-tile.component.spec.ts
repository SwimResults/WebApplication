import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TeamListTileComponent} from './team-list-tile.component';

describe('TeamListTileComponent', () => {
  let component: TeamListTileComponent;
  let fixture: ComponentFixture<TeamListTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [TeamListTileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamListTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
