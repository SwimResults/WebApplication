import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartListTileComponent } from './components';



@NgModule({
    declarations: [
        StartListTileComponent
    ],
    exports: [
        StartListTileComponent
    ],
    imports: [
        CommonModule
    ]
})
export class StartsModule { }
