import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurCoffeComponent } from './our-coffe.component';


const routes: Routes = [

      { path: '', component: OurCoffeComponent },


]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurCoffeRoutingModule { }
