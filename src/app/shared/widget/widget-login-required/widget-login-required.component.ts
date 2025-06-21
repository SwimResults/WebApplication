import { Component, inject } from '@angular/core';
import {AuthService} from "../../../core/service/auth.service";
import {WidgetInfoTextComponent} from '../widget-info-text/widget-info-text.component';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-widget-login-required',
    templateUrl: './widget-login-required.component.html',
    styleUrls: ['./widget-login-required.component.scss'],
    imports: [WidgetInfoTextComponent, TranslateModule]
})
export class WidgetLoginRequiredComponent {
    private authService = inject(AuthService);

    isAuthed: boolean = false;

    constructor() {
        this.authService.isAuthenticated.subscribe(data => this.isAuthed = data);
    }
}
