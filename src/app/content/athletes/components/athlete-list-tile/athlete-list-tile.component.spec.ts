import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteListTileComponent } from './athlete-list-tile.component';
import {AthletesModule} from "../../athletes.module";

describe('AthleteListTileComponent', () => {
  let component: AthleteListTileComponent;
  let fixture: ComponentFixture<AthleteListTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthleteListTileComponent ],
      imports: [
        AthletesModule
      ]
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
