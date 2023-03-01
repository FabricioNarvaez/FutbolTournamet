import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	links: Array<any> = [
		{
			route: "/home",
			title: "HOME"
		},
		{
			route: "/error",
			title: "ESTADISTICAS"
		},
		{
			route: "/error2",
			title: "CLASIFICACIÓN"
		},
		{
			route: "/error3",
			title: "RESULTADOS"
		},
	]

	constructor() { }

	menuVariable:boolean = false;
	menuIconVariable:boolean = false;

	ngOnInit(): void {
	}

	openMenu(){
		this.menuVariable =! this.menuVariable;
		this.menuIconVariable =! this.menuIconVariable;
	}
}
