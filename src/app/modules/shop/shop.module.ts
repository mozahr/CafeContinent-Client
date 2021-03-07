
import { NgModule } from '@angular/core';

import { SwiperModule } from 'swiper/angular';
import { ShopComponent } from './pages/shop/shop.component';
import { EShopComponent } from './pages/shop/e-shop/e-shop.component';
import { LocalShopComponent } from './pages/shop/local-shop/local-shop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentModule } from 'src/app/shared/components/components.module';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  declarations: [
    ShopComponent,
    EShopComponent,
    LocalShopComponent,

  ],
  imports: [
    CommonModule,
    SwiperModule,
    ComponentModule,
    ShopRoutingModule
  ],
  providers: [],
  // bootstrap: [WebsiteComponent]
})
export class ShopModule { }
