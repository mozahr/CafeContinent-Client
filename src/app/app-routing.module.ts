import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'shop',
    loadChildren: () => import('../app/modules/shop/shop.module').then(m => m.ShopModule)
  },
  {
    path: 'e-shop',
    loadChildren: () => import('../app/modules/shop/shop.module').then(m => m.ShopModule)
  },
  {
    path: 'partners',
    loadChildren: () => import('../app/modules/others/partners/partners.module').then(m => m.PartnersModule)
  },
  {
    path: 'ourcoffe',
    loadChildren: () => import('../app/modules/others/our-coffe/our-coffe.module').then(m => m.OurCoffeModule)
  },
  {
    path: 'ourcoffe/:continent',
    loadChildren: () => import('../app/modules/others/our-coffe/our-coffe.module').then(m => m.OurCoffeModule)
  },
  {
    path: 'formations',
    loadChildren: () => import('../app/modules/formation/formation.module').then(m => m.FormationModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('../app/modules/others/contact-us/contact-us.module').then(m => m.ContactUsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
