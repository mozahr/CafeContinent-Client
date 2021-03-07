
import { NgModule } from '@angular/core';

import { SwiperModule } from 'swiper/angular';
import { PartnersComponent } from './partners.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentModule } from 'src/app/shared/components/components.module';
import { CommonModule } from '@angular/common';
import { PartnersRoutingModule } from './partners-routing.module';


@NgModule({
  declarations: [

    PartnersComponent,
  ],
  imports: [
    CommonModule,
    SwiperModule,
    ComponentModule,
    PartnersRoutingModule
  ],
  providers: [],
  // bootstrap: [WebsiteComponent]
})
export class PartnersModule { }
