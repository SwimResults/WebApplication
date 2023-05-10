import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAthletesEventComponent, PageAthletesGeneralComponent } from './pages';
import { AthleteListComponent, AthleteListTileComponent } from './components';


@NgModule({
  declarations: [
    PageAthletesEventComponent,
    PageAthletesGeneralComponent,
    AthleteListComponent,
    AthleteListTileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AthletesModule { }
