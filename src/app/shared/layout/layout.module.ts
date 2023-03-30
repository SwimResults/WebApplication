import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import {ElementsModule} from "../elements/elements.module";
import {MatIconModule} from "@angular/material/icon";
import {RouterLink, RouterLinkActive, RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    SidebarComponent,
    NavComponent,
    HeaderComponent
  ],
  exports: [
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ElementsModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive,
    RouterModule
  ]
})
export class LayoutModule { }
