import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { ClubPageGeneralComponent } from './components/clubPageGeneral/clubPageGeneral.component';
import { ErrorComponent } from "./components/error/error.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'inicio', component: HomeComponent},
    {path: 'club/general', component: ClubPageGeneralComponent},
    { path: 'home', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'club', redirectTo: 'club/general', pathMatch: 'full' },
    {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);