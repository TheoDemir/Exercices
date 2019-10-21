import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core'; 


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() newSearchEvent = new EventEmitter<string>();
  
  getSearchValue(value: string) {
    this.newSearchEvent.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
