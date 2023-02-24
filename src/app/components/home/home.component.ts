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
      team: 'Manchester Utd',
      GD: 5,
      pts: 10,
    },
    {
      team: 'Manchester City',
      GD: 8,
      pts: 13,
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

  constructor() {
  }

  ngOnInit(): void {}
}
