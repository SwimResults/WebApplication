import {Component, Input, ViewChild} from '@angular/core';
import {IListTile} from "../../../../core/model/list/list-tile.model";
import {MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'sr-list-tile',
  templateUrl: './list-tile.component.html',
  styleUrls: ['./list-tile.component.scss']
})
export class ListTileComponent {
  @Input() entry!: IListTile;

  // we create an object that contains coordinates
  menuTopLeftPosition =  {x: 0, y: 0}

  // reference to the MatMenuTrigger in the DOM
  @ViewChild("contextMenuTrigger") contextMenuTrigger: MatMenuTrigger = {} as MatMenuTrigger;

  onRightClick(event: MouseEvent) {
    event.preventDefault();

    this.menuTopLeftPosition.x = event.clientX;
    this.menuTopLeftPosition.y = event.clientY;

    this.contextMenuTrigger.openMenu();
  }
}
