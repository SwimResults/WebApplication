import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExampleModule} from "./example";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    ExampleModule
  ]
})
export class ContentModule { }
