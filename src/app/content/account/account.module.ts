import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './pages';
import { UserProfileViewComponent } from './components/user-profile-view/user-profile-view.component';
import {ElementsModule} from "../../shared/elements/elements.module";
import {CoreModule} from "../../core/core.module";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    UserProfileComponent,
    UserProfileViewComponent
  ],
    imports: [
        CommonModule,
        ElementsModule,
        CoreModule,
        MatIconModule
    ]
})
export class AccountModule { }
