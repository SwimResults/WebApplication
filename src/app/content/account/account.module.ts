import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageUserSettingsComponent, UserProfileComponent} from './pages';
import { UserProfileViewComponent, SettingsViewComponent} from './components';
import {ElementsModule} from "../../shared/elements/elements.module";
import {CoreModule} from "../../core/core.module";
import {MatIconModule} from "@angular/material/icon";
import { SettingsUserAthleteComponent } from './components/settings-user-athlete/settings-user-athlete.component';



@NgModule({
  declarations: [
    UserProfileComponent,
    UserProfileViewComponent,
    PageUserSettingsComponent,
    SettingsViewComponent,
    SettingsUserAthleteComponent
  ],
    imports: [
        CommonModule,
        ElementsModule,
        CoreModule,
        MatIconModule
    ]
})
export class AccountModule { }
