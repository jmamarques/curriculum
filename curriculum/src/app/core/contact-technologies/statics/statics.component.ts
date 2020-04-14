import {Component, OnInit, ViewChild} from '@angular/core';
import {AgGridAngular} from 'ag-grid-angular';
import {TechnologiesService} from '../../services/technologies.service';
import {NumberCommaPipe} from '../../Pipes/number-comma.pipe';
import * as AOS from 'aos';
import {ContributorsGit} from '../../interfaces/contributors-git';

@Component({
  selector: 'cod-statics',
  templateUrl: './statics.component.html',
  styleUrls: ['./statics.component.scss']
})
export class StaticsComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;
  issuesList: any[] = [];

  /* **************OPTIONS FOR BOTH CHARTS**************** */
  /* **************************************************** */
  /* *************************************************** */

  // pie chart
  pieOptions: any;
  // bar chart
  barChartOptions: any;

  constructor(private technologiesService: TechnologiesService,
              private pipeCommaNumber: NumberCommaPipe) {
    /* **************CHARTS INITIALIZATION**************** */
    /* ************************************************** */
    /* ************************************************* */
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
            width: 500,
            height: 338,
            tooltipOffset: [20, 20],
            autoSize: false,
            title: {
              enabled: false,
              /*fontSize: 24,
              fontWeight: 'bold',
              text: 'Curriculum Technologies'*/
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
            text: ''
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
                text: 'Number of Commits',
                color: 'orange'
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
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
      once: true
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

}
