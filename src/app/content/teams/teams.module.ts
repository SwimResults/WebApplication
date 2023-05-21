import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTeamsEventComponent, PageTeamsGeneralComponent, PageTeamComponent } from './pages';
import { TeamListViewComponent, TeamListComponent, TeamListTileComponent, TeamProfileIntroComponent } from './components';
import {ElementsModule} from "../../shared/elements/elements.module";
import {CoreModule} from "../../core/core.module";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    PageTeamsEventComponent,
    PageTeamsGeneralComponent,
    TeamListViewComponent,
    TeamListComponent,
    TeamListTileComponent,
    PageTeamComponent,
    TeamProfileIntroComponent
  ],
  imports: [
    CommonModule,
    ElementsModule,
    CoreModule,
    MatIconModule
  ]
})
export class TeamsModule { }
