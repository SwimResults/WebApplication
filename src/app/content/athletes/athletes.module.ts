import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAthletesEventComponent, PageAthletesGeneralComponent, PageAthleteComponent } from './pages';
import { AthleteListComponent, AthleteListTileComponent, AthleteListViewComponent } from './components';
import { ElementsModule } from "../../shared/elements/elements.module";

@NgModule({
  declarations: [
    PageAthletesEventComponent,
    PageAthletesGeneralComponent,
    AthleteListComponent,
    AthleteListTileComponent,
    AthleteListViewComponent,
    PageAthleteComponent
  ],
  imports: [
    CommonModule,
    ElementsModule
  ]
})
export class AthletesModule { }
