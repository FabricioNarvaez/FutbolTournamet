import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { ClubPageComponent } from './components/clubPage/clubPage.component';
import { ErrorComponent } from "./components/error/error.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'inicio', component: HomeComponent},
    {path: 'club', component: ClubPageComponent},
    {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);