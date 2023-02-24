import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
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
  
  constructor() { }

  ngOnInit(): void {
  }

}
