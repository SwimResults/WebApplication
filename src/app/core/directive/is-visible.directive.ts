import {AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output, inject} from '@angular/core';

@Directive({selector: '[srIsVisible]'})
export class IsVisibleDirective implements AfterViewInit {
    private element = inject(ElementRef);

    @Output() elementVisible = new EventEmitter<boolean>();
    @Input() isTargetElement: boolean = false;

    hasFired: boolean = false;

    public intersectionOptions = {
        root: null, //implies the root is the document viewport
        rootMargin: '0px',
        threshold: [0, 0.5, 1],
    };

    ngAfterViewInit() {
        const observer = new IntersectionObserver(
            this.intersectionCallback.bind(this),
            this.intersectionOptions
        );

        if (this.isTargetElement) {
            observer.observe(this.element.nativeElement);
        }
    }

    intersectionCallback(entries: any) {
        entries.forEach((entry: any) => {
            if (entry.intersectionRatio === 1 && !this.hasFired) {
                this.elementVisible.emit(true); //element is completely visible in the viewport
                this.hasFired = true;
            } else {
                this.elementVisible.emit(false);
            }
        });
    }

}
