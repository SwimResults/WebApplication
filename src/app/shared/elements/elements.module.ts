import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { IconPanelComponent } from './icon-panel/icon-panel.component';
import {MatIconModule} from "@angular/material/icon";
import { NavGroupComponent } from './nav/nav-group/nav-group.component';
import { NavLinkComponent } from './nav/nav-link/nav-link.component';
import {RouterLink, RouterLinkActive} from "@angular/router";



@NgModule({
    declarations: [
        PanelComponent,
        IconPanelComponent,
        NavGroupComponent,
        NavLinkComponent
    ],
  exports: [
    PanelComponent,
    IconPanelComponent,
    NavGroupComponent,
    NavLinkComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterLinkActive,
    RouterLink
  ]
})
export class ElementsModule { }
