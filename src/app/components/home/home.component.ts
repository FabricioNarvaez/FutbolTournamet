import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, SwiperOptions } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  swiperConfig: SwiperOptions = {
    slidesPerView: "auto",
    spaceBetween: 10,
    loop: true,
    navigation: true,
    pagination: { clickable: false },
    breakpoints: {
      6000: {slidesPerView: 2},
      1000: {slidesPerView: 4},
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
