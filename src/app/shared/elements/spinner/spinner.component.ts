import {Component, Input} from '@angular/core';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
    selector: 'sr-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
    imports: [MatProgressSpinner]
})
export class SpinnerComponent {
  @Input() style: "material" | "swim clock" = "swim clock";
  @Input() spinnerSize: "large" | "text" | "btn" | "widget" = "large";
  @Input() materialColor: "btn" | "first" = "btn";
}
