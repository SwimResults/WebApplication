import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageLiveComponent} from "./pages";
import { LivetimingComponent, LivetimingControlsComponent, LivetimingTableComponent } from './components';
import { LivetimingHeaderComponent } from './components/livetiming/livetiming-header/livetiming-header.component';
import {ElementsModule} from "../../shared/elements/elements.module";
import {CoreModule} from "../../core/core.module";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    PageLiveComponent,
    LivetimingComponent,
    LivetimingTableComponent,
    LivetimingControlsComponent,
    LivetimingHeaderComponent,
  ],
  imports: [
    CommonModule,
    ElementsModule,
    CoreModule,
    MatIconModule
  ]
})
export class LiveModule { }
