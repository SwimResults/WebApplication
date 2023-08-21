import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageStatsEventComponent, PageStatsGeneralComponent } from './pages';


@NgModule({
  declarations: [
    PageStatsEventComponent,
    PageStatsGeneralComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StatsModule { }
