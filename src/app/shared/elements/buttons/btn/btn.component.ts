import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SpinnerComponent} from '../../spinner/spinner.component';

@Component({
    selector: 'sr-btn',
    templateUrl: './btn.component.html',
    styleUrls: ['./btn.component.scss'],
    imports: [SpinnerComponent]
})
export class BtnComponent {
  @Input() color: "pdf" | "info" | "stream" | undefined;
  @Input() active: boolean = true;
  @Input() loading: boolean = false;

  @Input() layout: "normal" | "no-background" = "normal";

  @Output() btnClick: EventEmitter<boolean> = new EventEmitter<boolean>()

  getActiveClass() {
    return this.active ? 'active' : 'inactive';
  }

  onClick() {
    this.btnClick.emit(true);
  }
}
