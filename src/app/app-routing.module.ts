import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurCoffeComponent } from './our-coffe/our-coffe.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'ourcoffe', component: OurCoffeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
