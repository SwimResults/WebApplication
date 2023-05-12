import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamListViewComponent } from './team-list-view.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {TeamsModule} from "../../teams.module";

describe('TeamListViewComponent', () => {
  let component: TeamListViewComponent;
  let fixture: ComponentFixture<TeamListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamListViewComponent ],
      imports: [
        HttpClientTestingModule,
        TeamsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
