import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
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

  lastMatchWeek = 1;

  lastWeekResults: Array<any> = [
    {
      teamHome: 'Arsenal',
      teamHomeImg: '../../../assets/images/teams/Arsenal.png',
      teamHomeResult: 1,
      teamAway: 'Borussia',
      teamAwayImg: '../../../assets/images/teams/Borussia.png',
      teamAwayResult: 3,
    },
    {
      teamHome: 'Bayern',
      teamHomeImg: '../../../assets/images/teams/Bayern.png',
      teamHomeResult: 0,
      teamAway: 'Manchester United',
      teamAwayImg: '../../../assets/images/teams/Manchester United.png',
      teamAwayResult: 2,
    },
    {
      teamHome: 'Besiktas',
      teamHomeImg: '../../../assets/images/teams/Besiktas.png',
      teamHomeResult: 1,
      teamAway: 'PSG',
      teamAwayImg: '../../../assets/images/teams/PSG.png',
      teamAwayResult: 1,
    },
    {
      teamHome: 'Manchester City',
      teamHomeImg: '../../../assets/images/teams/Manchester City.png',
      teamHomeResult: 3,
      teamAway: 'Barcelona',
      teamAwayImg: '../../../assets/images/teams/Barcelona.png',
      teamAwayResult: 4,
    },
    {
      teamHome: 'Neira',
      teamHomeImg: '../../../assets/images/teams/Neira.png',
      teamHomeResult: 1,
      teamAway: 'Diogo',
      teamAwayImg: '../../../assets/images/teams/Diogo.png',
      teamAwayResult: 2,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
