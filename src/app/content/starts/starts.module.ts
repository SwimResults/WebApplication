import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartListTileComponent } from './components';
import {ElementsModule} from "../../shared/elements/elements.module";
import {RouterLink} from "@angular/router";



@NgModule({
    declarations: [
        StartListTileComponent
    ],
    exports: [
        StartListTileComponent
    ],
    imports: [
        CommonModule,
        ElementsModule,
        RouterLink
    ]
})
export class StartsModule { }
