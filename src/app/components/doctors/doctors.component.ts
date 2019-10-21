import { Component, OnInit } from '@angular/core';
import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {
  length = 20;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10];

  pageEvent: PageEvent;

  title = 'Angular Search Using ng2-search-filter';
  searchText;
  doctorList = [
    {id: 1, name: 'Doctor1'},
    {id: 2, name: 'Doctor2'},
    {id: 3, name: 'Doctor3'},
    {id: 4, name: 'Doctor4'},
    {id: 5, name: 'Doctor5'},
    {id: 6, name: 'Doctor6'},
    {id: 7, name: 'Doctor7'},
    {id: 8, name: 'Doctor8'},
    {id: 9, name: 'Doctor9'},
    {id: 10, name: 'Doctor10'},
    {id: 11, name: 'Doctor11'},
    {id: 12, name: 'Doctor12'},
    {id: 13, name: 'Doctor13'},
    {id: 14, name: 'Doctor14'},
    {id: 15, name: 'Doctor15'},
    {id: 16, name: 'Doctor16'},
    {id: 17, name: 'Doctor17'},
    {id: 18, name: 'Doctor18'},
    {id: 19, name: 'Doctor19'},
    {id: 20, name: 'Doctor420'},
  ];

  constructor() { }

  ngOnInit() {
  }
}
