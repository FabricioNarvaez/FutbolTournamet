import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

	menuVariable:boolean = false;

  jornadas : Array<string> = ["Jornada 1", 
                              "Jornada 2",
                              "Jornada 3",
                              "Jornada 4",
                              "Jornada 5",
                              "Jornada 6",
                              "Jornada 7",
                              "Jornada 8",
                              "Jornada 9",
                              "Jornada 10",
                              "Jornada 11",
                              "Jornada 12",
                              "Jornada 13",
                              "Jornada 14",
                              "Jornada 15",
                              "Jornada 16",
                              "Jornada 17",
                              "Jornada 18",
                              "Jornada 19",
                              "Jornada 20",
                              "Jornada 21",
                              "Jornada 22",
                              "Jornada 23",
                              "Jornada 24",
                              "Jornada 25",
                              "Jornada 26",
                              "Jornada 27",
                              "Jornada 28",
                              "Jornada 29",
                              "Jornada 29",
                              "Jornada 30",
                              "Jornada 31",
                              "Jornada 32",
                              "Jornada 33",
                              "Jornada 34",
                              "Jornada 35",
                              "Jornada 36",
                              "Jornada 37",
                              "Jornada 38"];

  constructor() {}

  ngOnInit(): void {
  }

  openList(){
    this.menuVariable = !this.menuVariable;
  }
}
