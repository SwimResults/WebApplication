import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAthletesEventComponent, PageAthletesGeneralComponent, PageAthleteComponent } from './pages';
import { AthleteListComponent, AthleteListTileComponent, AthleteListViewComponent, AthleteProfileIntroComponent, AthleteStartsComponent } from './components';
import { ElementsModule } from "../../shared/elements/elements.module";
import {RouterLink} from "@angular/router";
import {StartsModule} from "../starts";

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
    StartsModule
  ]
})
export class AthletesModule { }
