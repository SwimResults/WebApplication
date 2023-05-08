import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDashboardEventComponent, PageDashboardGeneralComponent } from './pages';
import {ElementsModule} from "../../shared/elements/elements.module";


@NgModule({
  declarations: [
    PageDashboardEventComponent,
    PageDashboardGeneralComponent
  ],
    imports: [
        CommonModule,
        ElementsModule
    ]
})
export class DashboardModule { }
