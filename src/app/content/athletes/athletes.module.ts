import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageAthleteComponent, PageAthletesEventComponent, PageAthletesGeneralComponent} from './pages';
import {
    AthleteListComponent,
    AthleteListTileComponent,
    AthleteListViewComponent,
    AthleteProfileIntroComponent,
    AthleteStartsComponent
} from './components';
import {ElementsModule} from "../../shared/elements/elements.module";
import {RouterLink} from "@angular/router";
import {StartsModule} from "../starts";
import {CoreModule} from "../../core/core.module";

@NgModule({
    imports: [
        CommonModule,
        ElementsModule,
        RouterLink,
        StartsModule,
        CoreModule,
        PageAthletesEventComponent,
        PageAthletesGeneralComponent,
        AthleteListComponent,
        AthleteListTileComponent,
        AthleteListViewComponent,
        PageAthleteComponent,
        AthleteProfileIntroComponent,
        AthleteStartsComponent
    ]
})
export class AthletesModule { }
