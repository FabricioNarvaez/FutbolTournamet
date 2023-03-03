import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	links: Array<any> = [
		{
			route: "/inicio",
			title: "Inicio"
		},
		{
			route: "/error",
			title: "Estadisticas"
		},
		{
			route: "/error2",
			title: "Clasificación"
		},
		{
			route: "/error3",
			title: "Resultados"
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
