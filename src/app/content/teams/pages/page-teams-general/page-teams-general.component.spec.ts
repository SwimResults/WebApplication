import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTeamsGeneralComponent } from './page-teams-general.component';
import {TeamsModule} from "../../teams.module";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {TranslateModule} from "@ngx-translate/core";

describe('PageTeamsGeneralComponent', () => {
  let component: PageTeamsGeneralComponent;
  let fixture: ComponentFixture<PageTeamsGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTeamsGeneralComponent ],
      imports: [
        TeamsModule,
        HttpClientTestingModule,
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTeamsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
