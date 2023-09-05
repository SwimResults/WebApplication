import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {WidgetTile} from "../../../core/model/user/widget-tile.model";
import {ComponentClass, widgetComponents} from "../widgets/widgets";
import {WidgetDirective} from "../../../core/directive/widget.directive";

@Component({
  selector: 'sr-widget-tile',
  templateUrl: './widget-tile.component.html',
  styleUrls: ['./widget-tile.component.scss']
})
export class WidgetTileComponent implements OnInit {

  @Input() widget: WidgetTile = {} as WidgetTile;


  @ViewChild(WidgetDirective, {static: true}) srWidget!: WidgetDirective;

  constructor() {
  }

  ngOnInit(): void {
    this.loadComponents();
  }

  loadComponents(): void {
    if (!this.srWidget) return;
    const viewContainerRef = this.srWidget.viewContainerRef;
    viewContainerRef.clear();

    const selector = this.widget.content + '-' + this.widget.size?.toLowerCase();
    let widgetComp: ComponentClass | undefined = widgetComponents.get(selector);
    if (widgetComp != undefined) {
      viewContainerRef.createComponent(widgetComp);
    }
  }
}
