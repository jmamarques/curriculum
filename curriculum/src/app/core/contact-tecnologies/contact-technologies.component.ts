import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'cod-technologies',
  templateUrl: './contact-technologies.component.html',
  styleUrls: ['./contact-technologies.component.scss']
})
export class ContactTechnologiesComponent implements OnInit {
  /* configurations to ag-grid */
  columnDefs = [
    {headerName: 'Make', field: 'make', sortable: true, filter: true},
    {headerName: 'Model', field: 'model', sortable: true, filter: true},
    {headerName: 'Price', field: 'price', sortable: true, filter: true}
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
