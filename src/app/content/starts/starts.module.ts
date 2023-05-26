import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartListTileComponent, StartListComponent } from './components';
import {ElementsModule} from "../../shared/elements/elements.module";
import {RouterLink} from "@angular/router";
import { PageStartComponent } from './pages';
import {CoreModule} from "../../core/core.module";


@NgModule({
    declarations: [
        StartListTileComponent,
        StartListComponent,
        PageStartComponent
    ],
    exports: [
        StartListTileComponent,
        StartListComponent
    ],
    imports: [
        CommonModule,
        ElementsModule,
        RouterLink,
        CoreModule
    ]
})
export class StartsModule { }
