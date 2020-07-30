import { Component, OnInit, Input } from '@angular/core';
import { TvseriesService } from '../tvseries.service';
import { distinctCategoriesAndCount } from './helpFunctions';
import { ActivatedRoute } from '@angular/router';

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

  categoriesSelectedHandler(selectedCategoriesOut: Set<string>) {
    console.log(selectedCategoriesOut);
  }

  constructor(private tvSeriesService: TvseriesService, private activatedRoute: ActivatedRoute) {
    activatedRoute.url.subscribe(url => {
      this.searchQuery = activatedRoute.snapshot.paramMap.get('searchQuery');
      this.getTvSeries(this.searchQuery);
    });
  }

  ngOnInit(): void {
  }

}
