import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-nextMatch',
  templateUrl: './nextMatch.component.html',
  styleUrls: ['./nextMatch.component.css']
})

export class NextMatchComponent implements OnInit {
  targetDate: Date = new Date();
  currentDate: Date = new Date();
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  nextMatchInfo: Array<any> = [
    {
      teamHomeImg: '../../../assets/images/teams/Bayern.png',
      teamHome: "Bayern",
      matchDate: {
        date: '9/12/2023',
        hour: '17:45',
      },
      teamAwayImg: '../../../assets/images/teams/Besiktas.png',
      teamAway: "Besiktas"
    }
  ]
  
  constructor() { }

  ngOnInit(): void {
    this.targetDate = new Date('2023-12-31T23:59:59');
    interval(1000).subscribe(() => {
      this.currentDate = new Date();
      const timeDiff = this.targetDate.getTime() - this.currentDate.getTime();
      this.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    });
  }

}
