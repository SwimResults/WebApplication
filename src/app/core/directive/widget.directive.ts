import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[srWidget]',
    standalone: false
})
export class WidgetDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
