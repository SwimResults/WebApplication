import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAthletesEventComponent, PageAthletesGeneralComponent } from './pages';
import { AthleteListComponent, AthleteListTileComponent, AthleteListViewComponent } from './components';
import { ElementsModule } from "../../shared/elements/elements.module";


@NgModule({
  declarations: [
    PageAthletesEventComponent,
    PageAthletesGeneralComponent,
    AthleteListComponent,
    AthleteListTileComponent,
    AthleteListViewComponent
  ],
  imports: [
    CommonModule,
    ElementsModule
  ]
})
export class AthletesModule { }
