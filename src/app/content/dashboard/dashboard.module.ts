import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDashboardEventComponent, PageDashboardGeneralComponent } from './pages';
import {ElementsModule} from "../../shared/elements/elements.module";
import {CoreModule} from "../../core/core.module";
import {WidgetModule} from "../../shared/widget/widget.module";


@NgModule({
  declarations: [
    PageDashboardEventComponent,
    PageDashboardGeneralComponent
  ],
    imports: [
        CommonModule,
        ElementsModule,
        CoreModule,
        WidgetModule
    ]
})
export class DashboardModule { }
