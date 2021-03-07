import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNavDropdown]'
})
export class NavDropdownDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  @HostListener('mouseover')
  onMouseOver() {
    this.el.nativeElement.classList.add('show');
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.el.nativeElement.classList.remove('show');
  }

}
