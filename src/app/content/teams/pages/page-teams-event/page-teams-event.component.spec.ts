import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTeamsEventComponent } from './page-teams-event.component';
import {ElementsModule} from "../../../../shared/elements/elements.module";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {TeamsModule} from "../../teams.module";

describe('PageTeamsEventComponent', () => {
  let component: PageTeamsEventComponent;
  let fixture: ComponentFixture<PageTeamsEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTeamsEventComponent ],
      imports: [
        ElementsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        TeamsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTeamsEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
