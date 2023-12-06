import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDashboardEventComponent, PageDashboardGeneralComponent, PageDashboardSpeakerComponent } from './pages';
import {ElementsModule} from "../../shared/elements/elements.module";
import {CoreModule} from "../../core/core.module";
import {WidgetModule} from "../../shared/widget/widget.module";
import {DashboardViewComponent, SpeakerDashboardComponent} from './components';
import {LiveModule} from "../live";


@NgModule({
    declarations: [
        PageDashboardEventComponent,
        PageDashboardGeneralComponent,
        PageDashboardSpeakerComponent,
        DashboardViewComponent,
        SpeakerDashboardComponent
    ],
    imports: [
        CommonModule,
        ElementsModule,
        CoreModule,
        WidgetModule,
        LiveModule
    ]
})
export class DashboardModule { }
