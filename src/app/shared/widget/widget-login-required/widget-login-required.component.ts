import { Component } from '@angular/core';
import {AuthService} from "../../../core/service/auth.service";

@Component({
  selector: 'sr-widget-login-required',
  templateUrl: './widget-login-required.component.html',
  styleUrls: ['./widget-login-required.component.scss']
})
export class WidgetLoginRequiredComponent {
    isAuthed: boolean = false;

    constructor(
        private authService: AuthService
    ) {
        this.authService.isAuthenticated.subscribe(data => this.isAuthed = data);
    }
}
