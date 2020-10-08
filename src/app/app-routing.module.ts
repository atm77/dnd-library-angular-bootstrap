import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonsterPageComponent } from './modules/dndlibrary/pages/monster-page/monster-page.component';
import { RacesPageComponent } from './modules/dndlibrary/pages/races-page/races-page.component';

const routes: Routes = [
  { path: '', component: MonsterPageComponent },
  { path: 'races/:name', component: RacesPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
