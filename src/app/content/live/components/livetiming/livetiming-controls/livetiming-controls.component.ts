import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ChangeHeatEvent} from "../livetiming.component";
import {IconBtnComponent} from '../../../../../shared/elements/buttons/icon-btn/icon-btn.component';
import {MatIcon} from '@angular/material/icon';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'sr-livetiming-controls',
    templateUrl: './livetiming-controls.component.html',
    styleUrls: ['./livetiming-controls.component.scss'],
    imports: [IconBtnComponent, MatIcon, TranslateModule]
})
export class LivetimingControlsComponent {

  @Output() changeHeat: EventEmitter<ChangeHeatEvent> = new EventEmitter<ChangeHeatEvent>();
  @Input() currentEvent!: number;
  @Input() currentHeat!: number;

  @Input() hasNextEvent: boolean = false;
  @Input() hasPrevEvent: boolean = false;

  @Input() heatAmount!: number;


  decEvent() {
    this.changeHeat.emit({name: "event", next: false});
  }
  decHeat() {
    this.changeHeat.emit({name: "heat", next: false});
  }
  incEvent() {
    this.changeHeat.emit({name: "event", next: true});
  }
  incHeat() {
    this.changeHeat.emit({name: "heat", next: true});
  }

  firstEvent() {
    this.changeHeat.emit({name: "all", next: false});
  }

  lastEvent() {
    this.changeHeat.emit({name: "all", next: true});
  }
}
