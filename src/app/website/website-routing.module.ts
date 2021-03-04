import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FormationComponent } from './pages/formation/formation.component';
import { HomeComponent } from './pages/home/home.component';
import { OurCoffeComponent } from './pages/our-coffe/our-coffe.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { ShopComponent } from './pages/shop/shop.component';
import { WebsiteComponent } from './website.component';

const routes: Routes = [
  {
    path: '',
    component: WebsiteComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'ourcoffe', component: OurCoffeComponent },
      { path: 'ourcoffe/:continent', component: OurCoffeComponent },
      { path: 'e-shop', component: ShopComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'partners', component: PartnersComponent },
      { path: 'formations', component: FormationComponent },
      { path: 'contact-us', component: ContactUsComponent },

    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
