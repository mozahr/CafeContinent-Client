
import { NgModule } from '@angular/core';


import { HomeComponent } from './pages/home/home.component';
import { SwiperModule } from 'swiper/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentModule } from 'src/app/shared/components/components.module';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SwiperModule,
    ComponentModule,
    HomeRoutingModule
  ],
  providers: [],
  // bootstrap: [WebsiteComponent]
})
export class HomeModule { }
