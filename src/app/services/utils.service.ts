import { Injectable } from '@angular/core';
import {CountryTemperature} from '../models/CountryTemperature';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  correctData(data): CountryTemperature[] {
    for (const value of data) {
      if (!value.temperature) {
        value.temperature = Math.floor(Math.random() * 25) - 10;
      } else {
        value.temperature *= 1;
      }
    }
    return data;
  }

}
