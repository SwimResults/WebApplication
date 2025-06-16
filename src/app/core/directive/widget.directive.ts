import {Directive, ViewContainerRef} from '@angular/core';

@Directive({selector: '[srWidget]'})
export class WidgetDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
