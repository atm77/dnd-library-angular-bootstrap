import { NgModule } from '@angular/core';

import { MainHeaderComponent } from './header/main-header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';

import { SidebarModule } from 'ng-sidebar';

@NgModule({
  imports: [
    SidebarModule.forRoot(),
    RouterModule
  ],
  exports: [
    MainHeaderComponent,
    SidenavComponent
  ],
  declarations: [
    MainHeaderComponent,
    SidenavComponent
  ],
  providers: [],
})
export class CoreModule { }
