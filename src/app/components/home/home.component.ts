import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  matches: Array<any> = [
    {
      teamHome: 'Arsenal',
      teamHomeImg: '../../../assets/images/teams/Arsenal.png',
      teamAway: 'Barcelona',
      teamAwayImg: '../../../assets/images/teams/Barcelona.png',
      matchDate: {
        date: '8/12/2023',
        hour: '17:45',
      },
    },
    {
      teamHome: 'Bayern',
      teamHomeImg: '../../../assets/images/teams/Bayern.png',
      teamAway: 'Besiktas',
      teamAwayImg: '../../../assets/images/teams/Besiktas.png',
      matchDate: {
        date: '9/12/2023',
        hour: '17:45',
      },
    },
    {
      teamHome: 'Borussia',
      teamHomeImg: '../../../assets/images/teams/Borussia.png',
      teamAway: 'Diogo',
      teamAwayImg: '../../../assets/images/teams/Diogo.png',
      matchDate: {
        date: '7/6/2023',
        hour: '17:45',
      },
    },
    {
      teamHome: 'Manchester City',
      teamHomeImg: '../../../assets/images/teams/Manchester City.png',
      teamAway: 'Manchester United',
      teamAwayImg: '../../../assets/images/teams/Manchester United.png',
      matchDate: {
        date: '9/2/2023',
        hour: '17:45',
      },
    },
    {
      teamHome: 'Neira',
      teamHomeImg: '../../../assets/images/teams/Neira.png',
      teamAway: 'PSG',
      teamAwayImg: '../../../assets/images/teams/PSG.png',
      matchDate: {
        date: '3/3/2023',
        hour: '17:45',
      },
    },
  ];

  constructor() {
  }

  ngOnInit(): void {}
}
