import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'sr-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent {
  @Input() color: "pdf" | "info" | "stream" | undefined;
  @Input() active: boolean = true;
  @Input() loading: boolean = false;

  @Output() btnClick: EventEmitter<boolean> = new EventEmitter<boolean>()

  getActiveClass() {
    return this.active ? 'active' : 'inactive';
  }

  onClick() {
    this.btnClick.emit(true);
  }
}
