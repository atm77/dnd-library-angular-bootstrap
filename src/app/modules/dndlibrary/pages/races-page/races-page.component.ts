import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-races-page',
  templateUrl: './races-page.component.html',
  styleUrls: ['./races-page.component.scss']
})
export class RacesPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('name'));

  }

}
