
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContactUsRoutingModule } from './contact-us-routing.module';


import { ContactUsComponent } from './contact-us.component';



@NgModule({
  declarations: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule
  ],
  providers: [],
  // bootstrap: [WebsiteComponent]
})
export class ContactUsModule { }
