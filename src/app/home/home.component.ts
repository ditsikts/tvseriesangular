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

  constructor(private tvSeriesService: TvseriesService) { }
  categoriesCountMap: Map<string, number>;
  searchQuery: string;
  getTvSeries():void{
    this.tvSeries = this.tvSeriesService.getTvSeries();
    this.categoriesCountMap = distinctCategoriesAndCount( this.tvSeries);
  }
  searchChanged(event) {
    console.log(event.target.value);
  }
  ngOnInit(): void {
    this.getTvSeries();
  }

}
