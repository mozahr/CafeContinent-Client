import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';
import SwiperCore, {
  Autoplay
} from 'swiper/core';

SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  
  heroImages = ['home-hero-1-min.png','home-hero-2-min.png','home-hero-3-min.png','4.png','7.png']
  constructor() { }

  ngOnInit(): void {
  }
  scrollToElement($element): void {
    console.log($element);
    const y = $element.getBoundingClientRect().top + window.pageYOffset - 76;
    window.scrollTo({top: y, behavior: 'smooth'});
  }
}
