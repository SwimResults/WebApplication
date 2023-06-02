import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAthletesEventComponent, PageAthletesGeneralComponent, PageAthleteComponent } from './pages';
import { AthleteListComponent, AthleteListTileComponent, AthleteListViewComponent, AthleteProfileIntroComponent, AthleteStartsComponent } from './components';
import { ElementsModule } from "../../shared/elements/elements.module";
import {RouterLink} from "@angular/router";
import {StartsModule} from "../starts";
import {CoreModule} from "../../core/core.module";

@NgModule({
  declarations: [
    PageAthletesEventComponent,
    PageAthletesGeneralComponent,
    AthleteListComponent,
    AthleteListTileComponent,
    AthleteListViewComponent,
    PageAthleteComponent,
    AthleteProfileIntroComponent,
    AthleteStartsComponent
  ],
    imports: [
        CommonModule,
        ElementsModule,
        RouterLink,
        StartsModule,
        CoreModule
    ]
})
export class AthletesModule { }
