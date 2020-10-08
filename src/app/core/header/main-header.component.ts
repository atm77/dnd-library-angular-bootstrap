import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  templateUrl: 'main-header.component.html'
})
export class MainHeaderComponent implements OnInit {
  constructor(private router: Router) { }

  @Input() title: string;

  ngOnInit() { }

  goTo(event: Event, path: string) {
    event.preventDefault();
    this.router.navigate(["/races", 'Augusto']);
  }
}
