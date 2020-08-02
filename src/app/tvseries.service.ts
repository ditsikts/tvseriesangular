import { Injectable } from '@angular/core';
import { tvseriesmock } from './tvseriesmock';
import { TvSeries } from './models/TvSeries';
import { Category } from './models/Category';
import { Season } from './models/Season';

@Injectable({
  providedIn: 'root'
})

export class TvseriesService {

  getTvSeries(search: string): object {
    return tvseriesmock.filter(tvs => tvs.title.includes(search));
  }

  constructor() {

console.log(tvseriesmock[0]);

    let tv: TvSeries[] = tvseriesmock.map(tvs=> TvSeries.deserialize(tvs)) ;
    console.log(tv);
  }
}
