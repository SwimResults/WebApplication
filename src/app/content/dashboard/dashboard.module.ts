import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDashboardEventComponent, PageDashboardGeneralComponent } from './pages';
import {ElementsModule} from "../../shared/elements/elements.module";
import {CoreModule} from "../../core/core.module";
import {WidgetModule} from "../../shared/widget/widget.module";
import { DashboardViewComponent } from './components';


@NgModule({
  declarations: [
    PageDashboardEventComponent,
    PageDashboardGeneralComponent,
    DashboardViewComponent
  ],
    imports: [
        CommonModule,
        ElementsModule,
        CoreModule,
        WidgetModule
    ]
})
export class DashboardModule { }
