import {Component, Input} from '@angular/core';

@Component({
  selector: 'sr-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent {
  @Input() color: "pdf" | "info" | "stream" | undefined;
  @Input() active: boolean = true;

  getActiveClass() {
    return this.active ? 'active' : 'inactive';
  }
}
