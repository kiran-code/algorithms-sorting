import { Component, OnInit } from '@angular/core';
import {FetchSortingDataService} from '../../../services/fetch-sorting-data.service';
import {CountryTemperature} from '../../../models/CountryTemperature';

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.css']
})
export class BubbleSortComponent implements OnInit {
  data: CountryTemperature[];
  constructor( private fetchData: FetchSortingDataService) { }

  ngOnInit() {
  }

  downloadData() {
    this.fetchData.getCoutryData().subscribe(data => {
      this.data = data;
    });
  }

  bubbleSortData(data) {
  }
}
