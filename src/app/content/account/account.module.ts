import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './pages';
import { UserProfileViewComponent } from './components/user-profile-view/user-profile-view.component';
import {ElementsModule} from "../../shared/elements/elements.module";



@NgModule({
  declarations: [
    UserProfileComponent,
    UserProfileViewComponent
  ],
    imports: [
        CommonModule,
        ElementsModule
    ]
})
export class AccountModule { }
