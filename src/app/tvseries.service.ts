import { Injectable } from '@angular/core';
import { tvseriesmock } from './tvseriesmock';
import { TvSeries } from './models/TvSeries';
import { Category } from './models/Category';
import { Season } from './models/Season';

@Injectable({
  providedIn: 'root'
})

export class TvseriesService {

  tvseries : TvSeries[];

  getTvSeries(search: string): TvSeries[] {
    return this.tvseries.filter(tvs => tvs.title.includes(search));
  }

  findById(id: number): TvSeries {
    return this.tvseries.filter(tvs => tvs.id === id)[0];
  }

  constructor() {
    this.tvseries = tvseriesmock.map(tvs=> TvSeries.deserialize(tvs));
  }
}
