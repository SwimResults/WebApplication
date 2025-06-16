import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageTeamComponent, PageTeamsEventComponent, PageTeamsGeneralComponent} from './pages';
import {TeamListComponent, TeamListTileComponent, TeamListViewComponent, TeamProfileIntroComponent} from './components';
import {ElementsModule} from "../../shared/elements/elements.module";
import {CoreModule} from "../../core/core.module";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
    imports: [
        CommonModule,
        ElementsModule,
        CoreModule,
        MatIconModule,
        PageTeamsEventComponent,
        PageTeamsGeneralComponent,
        TeamListViewComponent,
        TeamListComponent,
        TeamListTileComponent,
        PageTeamComponent,
        TeamProfileIntroComponent
    ]
})
export class TeamsModule { }
