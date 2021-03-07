import { NgModule } from '@angular/core';

import { MainNavDirective } from './main-nav.directive';
import { NavDropdownDirective } from './nav-dropdown.directive';



@NgModule({
  declarations: [
    MainNavDirective,
    NavDropdownDirective
  ],
  imports: [

  ],
  exports: [
    MainNavDirective,
    NavDropdownDirective
  ],
  providers: [],
  // bootstrap: [WebsiteComponent]
})
export class CustomDirectivesModule { }
