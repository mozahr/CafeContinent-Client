import { Component, OnInit } from '@angular/core';
import { EffectFade  } from 'swiper';
import SwiperCore, {
  Autoplay,
  Navigation
} from 'swiper/core';

SwiperCore.use([Autoplay,EffectFade,Navigation ]);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  // var nextElement = {nextEl: }
  heroImages = ['home-hero-1-min.png','home-hero-2-min.png','home-hero-3-min.png','home-hero-4-min.png','home-hero-5-min.png']
  constructor() { }

  ngOnInit(): void {
  }
  scrollToElement($element): void {
    console.log($element);
    const y = $element.getBoundingClientRect().top + window.pageYOffset - 76;
    window.scrollTo({top: y, behavior: 'smooth'});
  }
}
