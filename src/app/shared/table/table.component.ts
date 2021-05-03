import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  position: number;
  name: string;
  url: string;

}

let ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Google', url: 'https://www.google.es' },
  { position: 2, name: 'Facebook', url: 'https://www.facebook.com' },
  { position: 3, name: 'Google', url: 'https://www.google.es' },
  { position: 5, name: 'Facebook', url: 'https://www.facebook.com' },
  { position: 6, name: 'Google', url: 'https://www.google.es' },
  { position: 8, name: 'Facebook', url: 'https://www.facebook.com' }
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {

  }

  delete(element: PeriodicElement) {
    this.dataSource = this.dataSource.filter((e: PeriodicElement) => e.position !== element.position)
  }

}
