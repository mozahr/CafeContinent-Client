import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FooterComponent } from './layout/footer/footer.component';
import { MainNavComponent } from './layout/main-nav/main-nav.component';
import { RouterModule } from '@angular/router';
import { CustomDirectivesModule } from '../shared/directives/custom-directives.module';



@NgModule({
  declarations: [
    FooterComponent,
    MainNavComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
    CustomDirectivesModule
  ],
  exports:[
    FooterComponent,
    MainNavComponent
  ],
  providers: [],
  // bootstrap: [WebsiteComponent]
})
export class LayoutModule { }
