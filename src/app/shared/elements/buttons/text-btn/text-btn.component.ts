import {Component} from '@angular/core';
import {BtnComponent} from "../btn/btn.component";
import {SpinnerComponent} from '../../spinner/spinner.component';

@Component({
    selector: 'sr-text-btn',
    templateUrl: '../btn/btn.component.html',
    styleUrls: ['./../btn/btn.component.scss', './text-btn.component.scss'],
    imports: [SpinnerComponent]
})
export class TextBtnComponent extends BtnComponent {

}
