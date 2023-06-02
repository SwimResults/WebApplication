import { Component } from '@angular/core';
import {BtnComponent} from "../btn/btn.component";

@Component({
  selector: 'sr-text-btn',
  templateUrl: './text-btn.component.html',
  styleUrls: ['./../btn/btn.component.scss', './text-btn.component.scss']
})
export class TextBtnComponent extends BtnComponent {

}
