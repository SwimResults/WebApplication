import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { IconPanelComponent } from './icon-panel/icon-panel.component';
import {MatIconModule} from "@angular/material/icon";
import { NavGroupComponent } from './nav/nav-group/nav-group.component';
import { NavLinkComponent } from './nav/nav-link/nav-link.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import { PageTitleComponent } from './page-title/page-title.component';
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
    declarations: [
        PanelComponent,
        IconPanelComponent,
        NavGroupComponent,
        NavLinkComponent,
        PageTitleComponent
    ],
    exports: [
        PanelComponent,
        IconPanelComponent,
        NavGroupComponent,
        NavLinkComponent,
        PageTitleComponent
    ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterLinkActive,
    RouterLink,
    TranslateModule
  ]
})
export class ElementsModule { }
