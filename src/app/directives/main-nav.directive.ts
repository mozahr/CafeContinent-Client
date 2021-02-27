import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMainNav]'
})
export class MainNavDirective {

  constructor(private el: ElementRef,) {


  }
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    if(window.pageYOffset > 0){
      this.el.nativeElement.classList.add('cbp-af-header-shrink');
    }else{
      this.el.nativeElement.classList.remove('cbp-af-header-shrink');
    }
  }
}
