import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'cod-tecnologies',
  templateUrl: './contact-technologies.component.html',
  styleUrls: ['./contact-technologies.component.scss']
})
export class ContactTechnologiesComponent implements OnInit {
  /* configurations to ag-grid */
  columnDefs = [
    {headerName: 'Make', field: 'make'},
    {headerName: 'Model', field: 'model'},
    {headerName: 'Price', field: 'price'}
  ];

  rowData = [
    {make: 'Toyota', model: 'Celica', price: 35000},
    {make: 'Ford', model: 'Mondeo', price: 32000},
    {make: 'Porsche', model: 'Boxter', price: 72000}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
