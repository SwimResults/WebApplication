import {Component} from '@angular/core';
import {NavComponent} from '../nav/nav.component';

@Component({
    selector: 'sr-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    imports: [NavComponent]
})
export class SidebarComponent {

    refresh() {
        window.location.href = "/";
    }
}
