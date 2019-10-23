import {Component, OnInit} from '@angular/core';
import {FetchSortingDataService} from '../../../services/fetch-sorting-data.service';
import {CountryTemperature} from '../../../models/CountryTemperature';

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['../../../app.component.css']
})
export class BubbleSortComponent implements OnInit {
  countriesData: CountryTemperature[];
  showTable = false;
  sortingDiection = '(asc)';

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
    this.dataCorrection(this.countriesData);
    for (let i = 0; i < this.countriesData.length; i++) {
      for (let j = 0; j < this.countriesData.length - i - 1; j++) {
        if (this.sortingDiection === '(asc)') {
          if (this.countriesData[j].temperature > this.countriesData[j + 1].temperature) {
            this.swap(j);
          }
        } else {
          if (this.countriesData[j].temperature < this.countriesData[j + 1].temperature) {
            this.swap(j);
          }
        }
      }
    }
    this.sortingDiection = (this.sortingDiection === '(asc)' ? '(dsc)' : '(asc)');
  }

  private swap(j: number) {
    const temp = this.countriesData[j];
    this.countriesData[j] = this.countriesData[j + 1];
    this.countriesData[j + 1] = temp;
  }

  dataCorrection(obj: CountryTemperature[]) {
    for (const each of obj) {
      if (!each.temperature) {
        each.temperature = Math.random() * (10) + 15;
      } else {
        each.temperature *= 1;
      }
    }
  }

/*
  convertToNumber(value: any): number {
    if (value) {
      return value * 1;
    }
    return -1000;
  }
*/
}
