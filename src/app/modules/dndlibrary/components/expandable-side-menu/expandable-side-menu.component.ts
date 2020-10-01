import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dndlibrary-expandable-side-menu',
  templateUrl: 'expandable-side-menu.component.html',
  styleUrls: ['expandable-side-menu.component.scss'],
})
export class ExpandableSideMenuComponent implements OnInit {

  _expanded: boolean;

  menus: string[];

  constructor() {
    this.menus = [
      'Monsters',
      'Spells',
      'Items',
      'Races',
    ]
  }

  ngOnInit() {

  }

  _onHover(isHovered): void {
    setTimeout(() => {
      this._expanded = isHovered;
    }, 200)

  }
}
