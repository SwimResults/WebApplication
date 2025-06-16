import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageDashboardEventComponent, PageDashboardGeneralComponent, PageDashboardSpeakerComponent} from './pages';
import {ElementsModule} from "../../shared/elements/elements.module";
import {CoreModule} from "../../core/core.module";
import {WidgetModule} from "../../shared/widget/widget.module";
import {DashboardViewComponent, SpeakerDashboardComponent} from './components';
import {LiveModule} from "../live";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
    imports: [
        CommonModule,
        ElementsModule,
        CoreModule,
        WidgetModule,
        LiveModule,
        MatIconModule,
        PageDashboardEventComponent,
        PageDashboardGeneralComponent,
        PageDashboardSpeakerComponent,
        DashboardViewComponent,
        SpeakerDashboardComponent
    ]
})
export class DashboardModule { }
