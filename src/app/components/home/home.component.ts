import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Navigation, Pagination, SwiperOptions } from 'swiper';

SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
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
      src: '../../../assets/images/teams/Club Nacional.png',
      club: 'Club Nacional',
    },
    {
      src: '../../../assets/images/teams/Diogo.png',
      club: 'Diogo',
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

  tableItems: Array<any> = [
    {
      team: 'Arsenal',
      GD: 15,
      pts: 50,
    },
    {
      team: 'Barcelona',
      GD: 19,
      pts: 55,
    },
    {
      team: 'Bayern',
      GD: 13,
      pts: 35,
    },
    {
      team: 'Besiktas',
      GD: 16,
      pts: 31,
    },
    {
      team: 'Borussia',
      GD: 25,
      pts: 60,
    },
    {
      team: 'Club Nacional',
      GD: 5,
      pts: 10,
    },
    {
      team: 'Diogo',
      GD: 10,
      pts: 20,
    },
    {
      team: 'Neira',
      GD: 10,
      pts: 20,
    },
    {
      team: 'PSG',
      GD: 21,
      pts: 34,
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
    }
  };

  constructor() {}

  ngOnInit(): void {}
}
