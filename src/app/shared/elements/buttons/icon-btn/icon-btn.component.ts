import { Component } from '@angular/core';
import {BtnComponent} from "../btn/btn.component";

@Component({
    selector: 'sr-icon-btn',
    templateUrl: '../btn/btn.component.html',
    styleUrls: ['./../btn/btn.component.scss', './icon-btn.component.scss'],
    standalone: false
})
export class IconBtnComponent extends BtnComponent {

}
