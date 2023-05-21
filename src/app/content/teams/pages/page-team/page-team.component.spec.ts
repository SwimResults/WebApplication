import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTeamComponent } from './page-team.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {TeamsModule} from "../../teams.module";
import {TranslateModule} from "@ngx-translate/core";

describe('PageTeamComponent', () => {
  let component: PageTeamComponent;
  let fixture: ComponentFixture<PageTeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTeamComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        TeamsModule,
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
