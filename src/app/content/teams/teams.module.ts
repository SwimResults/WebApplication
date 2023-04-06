import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTeamsEventComponent, PageTeamsGeneralComponent } from './pages';



@NgModule({
  declarations: [
    PageTeamsEventComponent,
    PageTeamsGeneralComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TeamsModule { }
