import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PageUserSettingsComponent, UserProfileComponent} from './pages';
import { UserProfileViewComponent, SettingsViewComponent} from './components';
import {ElementsModule} from "../../shared/elements/elements.module";
import {CoreModule} from "../../core/core.module";
import {MatIconModule} from "@angular/material/icon";
import { SettingsUserAthleteComponent } from './components/settings-user-athlete/settings-user-athlete.component';



@NgModule({
    imports: [
        CommonModule,
        ElementsModule,
        CoreModule,
        MatIconModule,
        UserProfileComponent,
        UserProfileViewComponent,
        PageUserSettingsComponent,
        SettingsViewComponent,
        SettingsUserAthleteComponent
    ]
})
export class AccountModule { }
