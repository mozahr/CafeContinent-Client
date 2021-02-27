import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './layout/main-nav/main-nav.component';
import { HomeComponent } from './home/home.component';
import { NavDropdownDirective } from './directives/nav-dropdown.directive';
import { SwiperModule } from 'swiper/angular';
import { FooterComponent } from './layout/footer/footer.component';
import { OurCoffeComponent } from './our-coffe/our-coffe.component';
import { ShopComponent } from './shop/shop.component';
import { EShopComponent } from './shop/e-shop/e-shop.component';
import { LocalShopComponent } from './shop/local-shop/local-shop.component';
import { MainNavDirective } from './directives/main-nav.directive';
import { PartnersComponent } from './partners/partners.component';
import { FormationComponent } from './formation/formation.component';
import { BlackBarComponent } from './components/black-bar/black-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    NavDropdownDirective,
    FooterComponent,
    OurCoffeComponent,
    ShopComponent,
    EShopComponent,
    LocalShopComponent,
    MainNavDirective,
    PartnersComponent,
    FormationComponent,
    BlackBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
