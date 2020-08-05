import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvseriesService } from '../tvseries.service';
import { TvSeries } from '../models/TvSeries';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  tvSeries: TvSeries;
  getTvSeries(id: number): void {
    this.tvSeries = this.tvSeriesService.findById(id);
  }

  constructor(private tvSeriesService: TvseriesService,  private activatedRoute: ActivatedRoute) {
    activatedRoute.url.subscribe(url => {
      let id = activatedRoute.snapshot.paramMap.get('id');
      this.getTvSeries(Number(id));
    });
  }

  ngOnInit(): void {
  }

}
