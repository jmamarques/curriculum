import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../services/user.service';
import {AgGridAngular} from 'ag-grid-angular';

@Component({
  selector: 'cod-technologies',
  templateUrl: './contact-technologies.component.html',
  styleUrls: ['./contact-technologies.component.scss']
})
export class ContactTechnologiesComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;

  /* configurations to ag-grid */
  columnDefs = [
    {headerName: 'Make', field: 'make', sortable: true, filter: true},
    {headerName: 'Model', field: 'model', sortable: true, filter: true},
    {headerName: 'Price', field: 'price', sortable: true, filter: true}
  ];

  rowData: any;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.rowData = this.userService.getUserStatics();
  }

  // how I get rows selected
  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');
    console.log(`Selected nodes: ${selectedDataStringPresentation}`);
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }
}
