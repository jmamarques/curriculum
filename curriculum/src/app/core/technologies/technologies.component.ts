import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import { AgGridAngular } from 'ag-grid-angular';
import { Tecnhologies } from '../Interfaces/tecnhologies';
import { TechnologiesService } from '../services/technologies.service';
import { NumberCommaPipe } from '../Pipes/number-comma.pipe';

@Component({
  selector: 'cod-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;
  techonlogies: Tecnhologies;

  /* configurations to ag-grid */
  columnDefs = [
    { headerName: 'Make', field: 'make', sortable: true, filter: true },
    { headerName: 'Model', field: 'model', sortable: true, filter: true },
    { headerName: 'Price', field: 'price', sortable: true, filter: true }
  ];

  // grid
  rowData: any;
  // charts
  options: any;
  dataChart: any;
  //pie chart
  pieOptions: any;

  constructor(private userService: UserService,
    private technologiesService: TechnologiesService,
    private pipeCommaNumber: NumberCommaPipe) {
    const abc: any = {};
    abc.abdgfedlkpfsrsdgfojisgrdauhiogrsdhuigsdrahuidrghui = 1;
    abc.notdata = 'sdf';
    console.warn(Object.keys(abc));
    this.technologiesService.getTechonlogies()
      .subscribe(tecno => {
        this.techonlogies = tecno;
        this.pieOptions = {
          data: this.createData(tecno),
          series: [
            {
              type: 'pie',
              labelKey: 'technologies',
              angleKey: 'type',
              innerRadiusOffset: 50,
              fills: ['#003f5c', '#58508d', '#bc5090','#ffa600','#ff6361'],
              strokes:['grey'],
              label: {
                color: '#ffffff'
              },
              highlightStyle: {
                fill: '#00a4ff',
                stroke: '#0071ff'
              },
            }
          ],
          padding: {
            top: 80,
            right: 0,
            bottom: 70,
            left: 100
          },
          width: 795,
          height: 480,
          tooltipOffset: [20, 20],
          autoSize: false,
          title: {
            enabled: true,
            fontSize: 21,
            fontWeight: 'bold',
            text: 'Curriculum Technologies'
          },
          legend: {
            markerShape: 'circle',
            markerSize: 18,
            strokeWidth: 1,
            spacing: 0,
            layoutHorizontalSpacing: 16,
            layoutVerticalSpacing: 20,
            itemSpacing: 9
          },
        };
      });
  }
  ngOnInit(): void {
    this.rowData = this.userService.getUserStatics();
    this.populateChart();
  }
  createData(tecno: any): any{
    const result:any [] = [];
    Object.keys(tecno).forEach(tec =>{
      result.push({
        technologies:tec,
        type:(this.pipeCommaNumber.transform(tecno[tec] as number))
      });
    });
    return result;
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
