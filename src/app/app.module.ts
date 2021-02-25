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
@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    NavDropdownDirective,
    FooterComponent,
    OurCoffeComponent
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
