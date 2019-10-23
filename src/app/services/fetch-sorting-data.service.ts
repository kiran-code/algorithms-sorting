import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {CountryTemperature} from '../models/CountryTemperature';

const httpOptions = {
  headers: new HttpHeaders({'access-control-allow-origin': '*'})
};

@Injectable({
  providedIn: 'root'
})

export class FetchSortingDataService {

  constructor( private http: HttpClient ) { }

  localServerUrl =  'http://localhost:8080/countryByTemperature.json';

  getCoutryData(): Observable<any> {
    return this.http.get(this.localServerUrl, httpOptions);
  }
}
