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
    
let cat: Category = new Category(tvseriesmock[0].categories[0]);
console.log(cat);
let se: Season = new Season(tvseriesmock[0].seasons[0]);
console.log(se);

  }
}
