import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebav',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  _opened = true;

  constructor() { }

  _toggleSidebar(): void {

  }

  ngOnInit() { }
}
