import { Component } from '@angular/core';

@Component({
    selector: 'sr-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    standalone: false
})
export class SidebarComponent {

    refresh() {
        window.location.href = "/";
    }
}
