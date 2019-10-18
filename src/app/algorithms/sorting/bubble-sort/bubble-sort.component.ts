import {Component, OnInit} from '@angular/core';
import {FetchSortingDataService} from '../../../services/fetch-sorting-data.service';
import {CountryTemperature} from '../../../models/CountryTemperature';

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.css']
})
export class BubbleSortComponent implements OnInit {
  countriesData: CountryTemperature[];
  countryNames = [{name: 'India'}, {name: 'Nepal'}, {name: 'Bhutan'}, {name: 'Sri Lanka'}];
  showTable = false;

  constructor(private fetchData: FetchSortingDataService) {
  }

  ngOnInit() {
  }

  downloadData() {
    this.fetchData.getCoutryData().subscribe(data => {
      this.countriesData = data;
      this.showTable = true;
    });
  }

  bubbleSortData() {
    console.log('sort data', this.countriesData.length, this.countriesData[0].temperature);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.countriesData.length; i++) {
        for (let j = 0; j < this.countriesData.length - i - 1; j++) {
          if ( this.countriesData[j].temperature > this.countriesData[j + 1].temperature) {
              const temp = this.countriesData[j];
              this.countriesData[j] = this.countriesData[j + 1];
              this.countriesData[j + 1] = temp;
          }
        }
    }
  }
}
