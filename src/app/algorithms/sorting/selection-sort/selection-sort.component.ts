import {Component, OnInit} from '@angular/core';
import {FetchSortingDataService} from '../../../services/fetch-sorting-data.service';
import {CountryTemperature} from '../../../models/CountryTemperature';
import {UtilsService} from '../../../services/utils.service';

@Component({
  selector: 'app-selection-sort',
  templateUrl: './selection-sort.component.html',
  styleUrls: ['../../../app.component.css']
})
export class SelectionSortComponent implements OnInit {
  countryRawData: CountryTemperature[] = [];
  showTable = false;
  sortingDiection = '(asc)';

  constructor(private fetchData: FetchSortingDataService, private utils: UtilsService) {
  }

  ngOnInit() {
  }

  downloadData() {
    this.fetchData.getCoutryData().subscribe(data => {
      this.countryRawData = data;
      this.showTable = true;
    });
  }

  selectionSortData() {
    this.countryRawData = this.utils.correctData(this.countryRawData);
    if (this.sortingDiection === '(asc)') {
      this.selectionSortDataAsc();
    } else {
      this.selectionSortDataDsc();
    }
    this.sortingDiection = (this.sortingDiection === '(asc)') ? '(dsc)' : '(asc)';
  }

  selectionSortDataDsc() {
    let largest;
    let x;

    for (let i = 0; i < this.countryRawData.length; i++) {
      largest = this.countryRawData[i];
      for (let j = i; j < this.countryRawData.length - 1; j++) {
        if (largest.temperature < this.countryRawData[j + 1].temperature) {
          largest = this.countryRawData[j + 1];
          x = j + 1;
        }
      }
      if (this.countryRawData[i].temperature < largest.temperature) {
        this.swap(i, x);
      }
    }
  }

  selectionSortDataAsc() {
    let smallest;
    let x;
    for (let i = 0; i < this.countryRawData.length; i++) {
      smallest = this.countryRawData[i];
      for (let j = i; j < this.countryRawData.length - 1; j++) {
        if (smallest.temperature > this.countryRawData[j + 1].temperature) {
          smallest = this.countryRawData[j + 1];
          x = j + 1;
        }
      }
      if (this.countryRawData[i].temperature > smallest.temperature) {
        this.swap(i, x);
      }
    }
  }

  private dataCorrection(obj: CountryTemperature[]) {
    for (const each of obj) {
      if (!each.temperature) {
        each.temperature = Math.random() * (10) + 15;
      } else {
        each.temperature *= 1;
      }
    }
  }

  private swap(i: number, x) {
    const temp = this.countryRawData[i];
    this.countryRawData[i] = this.countryRawData[x];
    this.countryRawData[x] = temp;
  }
}
