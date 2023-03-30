import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { IconPanelComponent } from './icon-panel/icon-panel.component';
import {MatIconModule} from "@angular/material/icon";



@NgModule({
    declarations: [
        PanelComponent,
        IconPanelComponent
    ],
  exports: [
    PanelComponent,
    IconPanelComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class ElementsModule { }
