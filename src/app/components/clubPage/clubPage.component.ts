import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-club-page',
  templateUrl: './clubPage.component.html',
  styleUrls: ['./clubPage.component.css'],
})
export class ClubPageComponent implements OnInit {
  clubInfo = {
    img: '../../../assets/images/teams/Bayern.png',
    clubName: 'Bayern',
    backgroundColor: 'red',
  };

  links: Array<any> = [
    {
      route: '/club/general',
      title: 'General',
    },
    {
      route: '/club/plantilla',
      title: 'Plantilla',
    },
    {
      route: '/club/Estadisticas',
      title: 'Estadísticas',
    },
    {
      route: '/club/resultados',
      title: 'Resultados',
    },
  ];
  constructor() {}
  ngOnInit(): void {}
}
