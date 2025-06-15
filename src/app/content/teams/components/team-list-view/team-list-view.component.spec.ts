import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamListViewComponent } from './team-list-view.component';
import { provideHttpClientTesting } from "@angular/common/http/testing";
import {TeamsModule} from "../../teams.module";
import {TranslateModule} from "@ngx-translate/core";
import {ElementsModule} from "../../../../shared/elements/elements.module";
import {RouterTestingModule} from "@angular/router/testing";
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('TeamListViewComponent', () => {
  let component: TeamListViewComponent;
  let fixture: ComponentFixture<TeamListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [TeamListViewComponent],
    imports: [TeamsModule,
        ElementsModule,
        TranslateModule.forRoot(),
        RouterTestingModule],
    providers: [provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
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
