import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTeamsEventComponent, PageTeamsGeneralComponent } from './pages';
import { TeamListViewComponent, TeamListComponent, TeamListTileComponent } from './components';
import {ElementsModule} from "../../shared/elements/elements.module";


@NgModule({
  declarations: [
    PageTeamsEventComponent,
    PageTeamsGeneralComponent,
    TeamListViewComponent,
    TeamListComponent,
    TeamListTileComponent
  ],
  imports: [
    CommonModule,
    ElementsModule
  ]
})
export class TeamsModule { }
