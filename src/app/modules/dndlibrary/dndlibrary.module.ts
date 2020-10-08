import { NgModule } from '@angular/core';

import { SubscriptionFormComponent } from '../dndlibrary/components/subscription-form/subscription-form.component';
import { ExpandableSideMenuComponent } from './components/expandable-side-menu/expandable-side-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'ng-sidebar';
import { RacesPageComponent } from './pages/races-page/races-page.component';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, NgbModule, CommonModule, BrowserModule, SidebarModule],
  exports: [ExpandableSideMenuComponent, SubscriptionFormComponent],
  declarations: [SubscriptionFormComponent, ExpandableSideMenuComponent, RacesPageComponent],
  providers: [],
})
export class DndLibraryModule { }
