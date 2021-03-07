import { NgModule } from '@angular/core';
import { BlackBarComponent } from '../components/black-bar/black-bar.component'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BlackBarComponent,
   
  ],
  imports: [
    CommonModule, 
    RouterModule 
  ],
  exports:[
    BlackBarComponent
  ],
  providers: [],
  // bootstrap: [WebsiteComponent]
})
export class ComponentModule { }
