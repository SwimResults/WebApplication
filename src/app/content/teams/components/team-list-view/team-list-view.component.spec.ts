import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamListViewComponent } from './team-list-view.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {TeamsModule} from "../../teams.module";
import {TranslateModule} from "@ngx-translate/core";
import {ElementsModule} from "../../../../shared/elements/elements.module";

describe('TeamListViewComponent', () => {
  let component: TeamListViewComponent;
  let fixture: ComponentFixture<TeamListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamListViewComponent ],
      imports: [
        HttpClientTestingModule,
        TeamsModule,
        ElementsModule,
        TranslateModule.forRoot()
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
