import {Component} from '@angular/core';
import {BtnComponent} from "../btn/btn.component";
import {SpinnerComponent} from '../../spinner/spinner.component';

@Component({
    selector: 'sr-flat-btn',
    templateUrl: '../btn/btn.component.html',
    styleUrls: ['./flat-btn.component.scss', './../btn/btn.component.scss'],
    imports: [SpinnerComponent]
})
export class FlatBtnComponent extends BtnComponent{
}
