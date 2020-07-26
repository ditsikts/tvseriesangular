import { Component, OnInit } from '@angular/core';
import { TvseriesService } from '../tvseries.service';
import { distinctCategoriesAndCount } from './helpFunctions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tvSeries: object;
  categoriesCountMap: Map<string, number>;
  searchQuery: string;

  getTvSeries(search: string): void {
    this.tvSeries = this.tvSeriesService.getTvSeries(search);
    this.categoriesCountMap = distinctCategoriesAndCount(this.tvSeries);
  }

  searchChanged(event) {
    this.getTvSeries(event.target.value);
    // console.log(this.tvSeries);
  }

  categoriesSelectedHandler(selectedCategoriesOut: Set<string>){
    console.log(selectedCategoriesOut);
    
  }

  constructor(private tvSeriesService: TvseriesService) { }

  ngOnInit(): void {
  }

}
