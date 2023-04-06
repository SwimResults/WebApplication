import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageAthletesEventComponent, PageAthletesGeneralComponent } from './pages';


@NgModule({
  declarations: [
    PageAthletesEventComponent,
    PageAthletesGeneralComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AthletesModule { }
