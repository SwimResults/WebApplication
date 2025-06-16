import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StartListComponent, StartListTileComponent} from './components';
import {ElementsModule} from "../../shared/elements/elements.module";
import {RouterLink} from "@angular/router";
import {PageStartComponent} from './pages';
import {CoreModule} from "../../core/core.module";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
    exports: [
        StartListTileComponent,
        StartListComponent
    ],
    imports: [
        CommonModule,
        ElementsModule,
        RouterLink,
        CoreModule,
        MatIconModule,
        StartListTileComponent,
        StartListComponent,
        PageStartComponent
    ]
})
export class StartsModule { }
