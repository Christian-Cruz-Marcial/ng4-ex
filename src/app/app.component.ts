import { Component } from '@angular/core';
import { SearchHistory } from './SearchHistory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchHistory]
})
export class AppComponent {


}
