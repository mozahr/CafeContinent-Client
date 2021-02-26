import { Component, OnInit } from '@angular/core';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay
} from 'swiper/core';

// install Swiper modules
  
  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Autoplay]);

@Component({
  selector: 'app-local-shop',
  templateUrl: './local-shop.component.html',
  styleUrls: ['./local-shop.component.scss']
})
export class LocalShopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
