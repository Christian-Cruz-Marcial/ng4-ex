import { Component, Input } from '@angular/core';
import { SearchHistory } from '../SearchHistory.service';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  constructor(public searchHistory: SearchHistory){

  }
}
