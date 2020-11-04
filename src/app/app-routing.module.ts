import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './modules/dndlibrary/pages/home-page/home-page.component';
import { MonsterPageComponent } from './modules/dndlibrary/pages/monster-page/monster-page.component';
import { RacesPageComponent } from './modules/dndlibrary/pages/races-page/races-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'races/:name', component: RacesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
