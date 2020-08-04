import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute) {
    activatedRoute.url.subscribe(url => {
      
    });
  }

  ngOnInit(): void {
  }

}
