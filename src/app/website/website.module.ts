import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WebsiteComponent } from './website.component';
import { MainNavComponent } from './layout/main-nav/main-nav.component';
import { HomeComponent } from './pages/home/home.component';
import { NavDropdownDirective } from '../directives/nav-dropdown.directive';
import { SwiperModule } from 'swiper/angular';
import { FooterComponent } from './layout/footer/footer.component';
import { OurCoffeComponent } from './pages/our-coffe/our-coffe.component';
import { ShopComponent } from './pages/shop/shop.component';
import { EShopComponent } from './pages/shop/e-shop/e-shop.component';
import { LocalShopComponent } from './pages/shop/local-shop/local-shop.component';
import { MainNavDirective } from '../directives/main-nav.directive';
import { PartnersComponent } from './pages/partners/partners.component';
import { FormationComponent } from './pages/formation/formation.component';
import { BlackBarComponent } from './components/black-bar/black-bar.component';
import { WebsiteRoutingModule } from './website-routing.module';
import { ContinentSelectionComponent } from './pages/our-coffe/continent-selection/continent-selection.component';
import { ContinentCountriesComponent } from './pages/our-coffe/continent-countries/continent-countries.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    WebsiteComponent,
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
    BlackBarComponent,
    ContinentSelectionComponent,
    ContinentCountriesComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    WebsiteRoutingModule,
    SwiperModule,
    BrowserAnimationsModule
  ],
  providers: [],
  // bootstrap: [WebsiteComponent]
})
export class WebsiteModule { }
