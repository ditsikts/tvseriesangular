import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-holder',
  templateUrl: './card-holder.component.html',
  styleUrls: ['./card-holder.component.css']
})
export class CardHolderComponent implements OnInit {

  @Input() tvSeries: object;

  constructor() { }

  ngOnInit(): void {
  }

}
