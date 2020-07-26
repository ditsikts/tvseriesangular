import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-categories-holder',
  templateUrl: './categories-holder.component.html',
  styleUrls: ['./categories-holder.component.css']
})
export class CategoriesHolderComponent implements OnInit {

  @Input()
  categoriesCountMap: Map<string, number>;

  categoriesSelected: Set<string>;

  @Output()
  categoriesSelectedEmit: EventEmitter<Set<string>> = new EventEmitter();

  changeSelectedCategories(key: string): void {
    if (this.categoriesSelected.has(key)) {
      this.categoriesSelected.delete(key);
    }
    else {
      this.categoriesSelected.add(key);
    }
    this.categoriesSelectedEmit.emit(this.categoriesSelected);
  }
  constructor() { }

  ngOnInit(): void {
    this.categoriesSelected = new Set();
  }

}
