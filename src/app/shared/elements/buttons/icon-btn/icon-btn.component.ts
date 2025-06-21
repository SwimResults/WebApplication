import {Component} from '@angular/core';
import {BtnComponent} from "../btn/btn.component";
import {SpinnerComponent} from '../../spinner/spinner.component';

@Component({
    selector: 'sr-icon-btn',
    templateUrl: '../btn/btn.component.html',
    styleUrls: ['./../btn/btn.component.scss', './icon-btn.component.scss'],
    imports: [SpinnerComponent]
})
export class IconBtnComponent extends BtnComponent {

}
