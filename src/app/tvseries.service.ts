import { Injectable } from '@angular/core';
import { tvseriesmock } from './tvseriesmock';

@Injectable({
  providedIn: 'root'
})

export class TvseriesService {

  getTvSeries(search: string): object {
    return tvseriesmock.filter(tvs => tvs.title.includes(search));
  }
  
  constructor() { }
}
