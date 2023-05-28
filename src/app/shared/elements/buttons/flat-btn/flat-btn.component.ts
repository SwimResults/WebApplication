import {Component} from '@angular/core';
import {BtnComponent} from "../btn/btn.component";

@Component({
  selector: 'sr-flat-btn',
  templateUrl: './flat-btn.component.html',
  styleUrls: ['./flat-btn.component.scss', './../btn/btn.component.scss']
})
export class FlatBtnComponent extends BtnComponent{
}
