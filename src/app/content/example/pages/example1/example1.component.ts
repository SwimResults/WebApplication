import {Component} from '@angular/core';
import {PanelComponent} from '../../../../shared/elements/panel/panel.component';
import {BtnComponent} from '../../../../shared/elements/buttons/btn/btn.component';
import {MatIcon} from '@angular/material/icon';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-example1',
    templateUrl: './example1.component.html',
    styleUrls: ['./example1.component.scss'],
    imports: [PanelComponent, BtnComponent, MatIcon, TranslateModule]
})
export class Example1Component {

}
