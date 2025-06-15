import {Component} from '@angular/core';
import {BtnComponent} from "../btn/btn.component";

@Component({
    selector: 'sr-flat-btn',
    templateUrl: '../btn/btn.component.html',
    styleUrls: ['./flat-btn.component.scss', './../btn/btn.component.scss'],
    standalone: false
})
export class FlatBtnComponent extends BtnComponent{
}
