import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormationComponent } from './formation/formation.component';
import { HomeComponent } from './home/home.component';
import { OurCoffeComponent } from './our-coffe/our-coffe.component';
import { PartnersComponent } from './partners/partners.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'ourcoffe', component: OurCoffeComponent },
  { path: 'e-shop', component: ShopComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'formations', component: FormationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
