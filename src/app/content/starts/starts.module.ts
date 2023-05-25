import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartListTileComponent } from './components';
import {ElementsModule} from "../../shared/elements/elements.module";
import {RouterLink} from "@angular/router";
import { StartListComponent } from './components/start-list/start-list.component';
import {CoreModule} from "../../core/core.module";



@NgModule({
    declarations: [
        StartListTileComponent,
        StartListComponent
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
