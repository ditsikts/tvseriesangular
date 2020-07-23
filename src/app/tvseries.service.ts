import { Injectable } from '@angular/core';
import { tvseriesmock } from './tvseriesmock';

@Injectable({
  providedIn: 'root'
})

export class TvseriesService {

  getTvSeries(): object {
    return tvseriesmock;
  }
  
  constructor() { }
}
