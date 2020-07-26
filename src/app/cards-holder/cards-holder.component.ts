import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards-holder',
  templateUrl: './cards-holder.component.html',
  styleUrls: ['./cards-holder.component.css']
})
export class CardsHolderComponent implements OnInit {

  @Input() tvSeries: object;

  constructor() { }

  ngOnInit(): void {
  }

}
