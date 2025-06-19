import {Directive, ViewContainerRef, inject} from '@angular/core';

@Directive({selector: '[srWidget]'})
export class WidgetDirective {
    viewContainerRef = inject(ViewContainerRef);
}
