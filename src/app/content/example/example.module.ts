import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Example1Component } from './pages';
import {ElementsModule} from "../../shared/elements/elements.module";



@NgModule({
    declarations: [
        Example1Component
    ],
    imports: [
        CommonModule,
        ElementsModule
    ]
})
export class ExampleModule { }
