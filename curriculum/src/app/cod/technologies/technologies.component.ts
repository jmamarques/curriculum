import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../core/services/user.service';
import {AgGridAngular} from 'ag-grid-angular';
import * as AOS from 'aos';

@Component({
  selector: 'cod-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;
  /* configurations to ag-grid */
  columnDefs = [
    {headerName: 'Make', field: 'make', sortable: true, filter: true},
    {headerName: 'Model', field: 'model', sortable: true, filter: true},
    {headerName: 'Price', field: 'price', sortable: true, filter: true}
  ];

  // grid
  rowData: any;
  // charts
  options: any;
  dataChart: any;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.rowData = this.userService.getUserStatics();
    this.populateChart();
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
      once: false
    });
  }

  populateChart(): void {
    this.dataChart = this.userService.getTechnologiesStatus().subscribe(data => {
      this.dataChart = data;
      this.options = {
        autoSize: false,
        height: 750,
        width: 1075,
        data: this.dataChart,
        title: {
          text: 'Our Users Technologies & Most Popular Technologies',
          fontSize: 18,
        },
        subtitle: { text: 'Source: Our Statistics & StackOverflow Developer Survey, 2019' },
        series: [
          {
            type: 'bar',
            xKey: 'type',
            yKeys: ['main', 'side', 'real'],
            yNames: [
              'Main Technology for ours users',
              'Side Technology for ours users',
              'Most Popular Technologies'
            ],
            grouped: true,
            fills: ['rgba(0, 117, 163, 0.9)', 'rgba(226, 188, 34, 0.9)', 'blue'],
            strokes: ['rgba(0, 117, 163, 0.9)', 'rgba(226, 188, 34, 0.9)', 'blue'],
          },
        ],
        axes: [
          {
            type: 'category',
            position: 'left',
          },
          {
            type: 'number',
            position: 'bottom',
            title: { text: '%' },
          },
        ],
        legend: { position: 'bottom' },
      };
    });
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
