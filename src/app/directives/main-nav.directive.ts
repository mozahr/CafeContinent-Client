import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMainNav]'
})
export class MainNavDirective {

  constructor(private el: ElementRef,) {


  }
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    if (window.pageYOffset > 0) {
      this.el.nativeElement.classList.add('cbp-af-header-shrink');
    } else {
      this.el.nativeElement.classList.remove('cbp-af-header-shrink');
    }
  }
  @HostListener('click', ['$event']) onClick($event) {
    var isLink = $event.srcElement.classList.contains("nav-link");
    var isDropdownLink = $event.srcElement.classList.contains("dropdown-item");
    
    if (isLink || isDropdownLink) {
      this.el.nativeElement.querySelector(".navbar-toggler").classList.remove('collapsed');
      var menu = this.el.nativeElement.querySelector("#navbarSupportedContent");
      menu.classList.remove('show');
    }

    console.info(isLink);
  }
}
