import {AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output} from '@angular/core';

@Directive({
  selector: '[srIsVisible]'
})
export class IsVisibleDirective implements AfterViewInit {
  constructor(private element: ElementRef) {}

  @Output() elementVisible = new EventEmitter<boolean>();
  @Input() isTargetElement: boolean = false;

  public intersectionOptions = {
    root: null, //implies the root is the document viewport
    rootMargin: '0px',
    threshold: [0, 0.5, 1],
  };

  ngAfterViewInit() {
    let observer = new IntersectionObserver(
      this.intersectionCallback.bind(this),
      this.intersectionOptions
    );

    if (this.isTargetElement) {
      observer.observe(this.element.nativeElement);
    }
  }

  intersectionCallback(entries: any) {
    entries.forEach((entry: any) => {
      if (entry.intersectionRatio === 1) {
        this.elementVisible.emit(true); //element is completely visible in the viewport
      } else {
        this.elementVisible.emit(false);
      }
    });
  }

}
