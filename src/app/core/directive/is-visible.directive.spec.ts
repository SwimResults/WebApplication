import { IsVisibleDirective } from './is-visible.directive';
import {ElementRef} from "@angular/core";

describe('IsVisibleDirective', () => {
  it('should create an instance', () => {
    const directive = new IsVisibleDirective({} as ElementRef);
    expect(directive).toBeTruthy();
  });
});
