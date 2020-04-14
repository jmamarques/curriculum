import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import { AgGridAngular } from 'ag-grid-angular';
import { Tecnhologies } from '../Interfaces/tecnhologies';
import { TechnologiesService } from '../services/technologies.service';
import { NumberCommaPipe } from '../Pipes/number-comma.pipe';
import { ContributorsGit } from '../Interfaces/contributors-git';
import * as AOS from 'aos';

@Component({
  selector: 'cod-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;
  /* configurations to ag-grid */
  issuesList: any[] = [];
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

  /* **************OPTIONS FOR BOTH CHARTS**************** */
  /* **************************************************** */
  /* *************************************************** */

  //pie chart
  pieOptions: any;
  //bar chart
  barChartOptions: any;

  /* **************CHARTS INITIALIZATION**************** */
  /* ************************************************** */
  /* ************************************************* */

  constructor(private userService: UserService,
    private technologiesService: TechnologiesService,
    private pipeCommaNumber: NumberCommaPipe) {

    this.technologiesService.getOpenIssues()
      .subscribe(issuesOpen => {
        this.issuesList = this.issuesList.concat(issuesOpen);
      });
    this.technologiesService.getClosedIssues()
      .subscribe(issuesClosed => {
        this.issuesList = this.issuesList.concat(issuesClosed);
      });
    this.technologiesService.getTechonlogies()
      .subscribe(tecno => {
        this.pieOptions = {
          data: this.createData(tecno),
          series: [
            {
              type: 'pie',
              labelKey: 'technologies',
              angleKey: 'type',
              innerRadiusOffset: 50,
              fills: ['#003f5c', '#58508d', '#bc5090', '#ffa600', '#ff6361'],
              strokes: ['grey'],
              label: {
                color: '#ffffff'
              },
              highlightStyle: {
                fill: '#69869d',
                stroke: '#69869d'
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
      }
      );
    this.technologiesService.getContributors()
      .subscribe(contributors => {
        this.barChartOptions = {
          data: this.getDataContributors(contributors),
          title: {
            text: 'Curriculum Commits'
          },
          axes: [
            {
              type: 'category',
              position: 'bottom'
            },
            {
              type: 'number',
              position: 'left',
              title: {
                text: 'Number of Commits'
              },
              line: {
                width: 1
              },
              tick: {
                width: 1,
                size: 6,
                count: 10
              },
              label: {
                fontWeight: 'normal',
                fontSize: 12
              },
              gridStyle: [
                {
                  stroke: 'rgba(195, 195, 195, 1)',
                  lineDash: [3, 10]
                }
              ]
            }
          ],
          series: [
            {
              type: 'column',
              xKey: 'contributor',
              yKeys: ['number_Commits'],
              fills: ['#97bc86'],
              strokes: ['grey'],
              highlightStyle: {
                fill: '#488f31',
                stroke: '#grey'
              },
              visible: true,
              showInLegend: false,
              tooltipEnabled: true,
              grouped: true
            }
          ],
          width: 400,
          height: 338
        };
      });
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
  /* **************CREATE DATA TO PIE GRAPH**************** */
  /* ****************************************************** */
  /* ****************************************************** */

  createData(tecno: any): any {
    const result: any[] = [];
    Object.keys(tecno).forEach(tec => {
      result.push({
        technologies: tec,
        type: (this.pipeCommaNumber.transform(tecno[tec] as number))
      });
    });
    return result;
  }
  /* **************CREATE DATA TO BARS GRAPH**************** */
  /* ****************************************************** */
  /* ***************************************************** */

  getDataContributors(contributors: ContributorsGit[]): any {
    const result: any[] = [];
    contributors.forEach(contri => {
      result.push(
        {
          contributor: contri.login,
          number_Commits: contri.contributions
        }
      );
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
