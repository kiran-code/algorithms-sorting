import {Component, OnInit} from '@angular/core';
import {FetchSortingDataService} from '../../../services/fetch-sorting-data.service';
import {CountryTemperature} from '../../../models/CountryTemperature';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-insertion-sort',
  templateUrl: './insertion-sort.component.html',
  styleUrls: ['./insertion-sort.component.css']
})
export class InsertionSortComponent implements OnInit {

  countryDataRaw: CountryTemperature[] = [];
  showTable = false;
  sortDirection = 'up';
  tempList = [17, 9, 2, 5, 1];

  constructor(private fetchData: FetchSortingDataService) {
  }

  ngOnInit() {
  }

  downloadData() {
    this.fetchData.getCoutryData().subscribe(data => {
      this.countryDataRaw = data;
    });
    this.showTable = true;
  }

  insertionSortData() {
    this.correctData();
    if (this.sortDirection === 'up') {
      //this.insertionSortDataUp();
      this.sortDirection = 'down';
    } else {
      // this.insertionSortDataDown();
      this.sortDirection = 'up';
    }
  }

  sortArray() {
    for (let i = 1; i < this.tempList.length; i++) {
      if (this.tempList[0] > this.tempList[i]) {
        this.shiftArray(i, this.tempList[i]);
      }
    }
  }

  shiftArray(i: number, x) {
    const array = this.tempList.slice(0, i);
    array.unshift(x);
    this.tempList = array.concat(this.tempList.splice(i + 1));
  }

/*  insertionSortDataUp() {
     for (let i = 1; i < this.countryDataRaw.length; i++) {
      if (this.countryDataRaw[0].temperature > this.countryDataRaw[i].temperature) {
        this.shiftArray(i, this.countryDataRaw[i]);
      }
    }
  }

  shiftArray(i: number, x) {
    const array = this.countryDataRaw.slice(0, i);
    array.unshift(x);
    this.countryDataRaw = array.concat(this.countryDataRaw.splice(i + 1));
  }*/

  correctData() {
    for (const value of this.countryDataRaw) {
      if (!value.temperature) {
        value.temperature = Math.random() * 25 - 10;
      } else {
        value.temperature *= 1;
      }
    }
  }
}
