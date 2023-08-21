import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example1Component } from './pages';
import {ElementsModule} from "../../shared/elements/elements.module";
import {CoreModule} from "../../core/core.module";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
    declarations: [
        Example1Component
    ],
  imports: [
    CommonModule,
    ElementsModule,
    CoreModule,
    MatIconModule
  ]
})
export class ExampleModule { }
