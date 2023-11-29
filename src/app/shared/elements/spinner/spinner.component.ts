import {Component, Input} from '@angular/core';

@Component({
  selector: 'sr-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  @Input() style: "material" | "swim clock" = "swim clock";
  @Input() spinnerSize: "large" | "text" | "btn" | "widget" = "large";
  @Input() materialColor: "btn" | "first" = "btn";
}
