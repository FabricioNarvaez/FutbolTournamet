import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'home-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SwiperComponent implements OnInit {
  imgCollection: Array<any> = [
    {
      src: '../../../assets/images/teams/Arsenal.png',
      club: 'Arsenal',
    },
    {
      src: '../../../assets/images/teams/Barcelona.png',
      club: 'Barcelona',
    },
    {
      src: '../../../assets/images/teams/Bayern.png',
      club: 'Bayern',
    },
    {
      src: '../../../assets/images/teams/Besiktas.png',
      club: 'Besiktas',
    },
    {
      src: '../../../assets/images/teams/Borussia.png',
      club: 'Borussia',
    },
    {
      src: '../../../assets/images/teams/Diogo.png',
      club: 'Diogo',
    },
    {
      src: '../../../assets/images/teams/Manchester City.png',
      club: 'Manchester City',
    },
    {
      src: '../../../assets/images/teams/Manchester United.png',
      club: 'Manchester Utd',
    },
    {
      src: '../../../assets/images/teams/Neira.png',
      club: 'Neira',
    },
    {
      src: '../../../assets/images/teams/PSG.png',
      club: 'PSG',
    },
  ];

  swiperConfig: any = {
    // centeredSlides: "true",
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: true,
    navigation: true,
    pagination: { clickable: false },
    breakpoints: {
      '@0.75': {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      '@1.00': {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      '@1.50': {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  };
  constructor() { }

  ngOnInit(): void {
  }

}
