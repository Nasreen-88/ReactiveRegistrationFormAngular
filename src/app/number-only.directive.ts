import { Directive, ElementRef, HostListener } from '@angular/core';

// @Directive({
//   selector: '[appNumberOnly]'
// })
// export class NumberOnlyDirective {

//   constructor(private el: ElementRef) { }

//   @HostListener('input', ['$event']) onInputChange(event: Event) {
//     const inputElement = event.target as HTMLInputElement;
//     let value = inputElement.value;
//     value = value.replace(/[^0-9]/g, ''); // Remove any non-numeric characters
//     inputElement.value = value;
//   }

// }

// code for simple custom directive.Above is for number only

@Directive({
  selector: '[customDirective]'
})
export class NumberOnlyDirective {
  constructor(private elementRef: ElementRef) {
    // Access and manipulate the host element
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }
}