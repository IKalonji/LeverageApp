import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-funded-campaigns',
  templateUrl: './funded-campaigns.page.html',
  styleUrls: ['./funded-campaigns.page.scss'],
})
export class FundedCampaignsPage implements OnInit {

  @ViewChild('barChartCanvas') barChartCanvas: ElementRef;

  barChart: any;
  title = 'Express Cash App';

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.barChartMethod();
  }

  barChartMethod() {
    this.barChart = new Chart(this.barChartCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['1-Aug', '2-Aug', '3-Aug', '4-Aug', '5-Aug', '6-Aug', '7-Aug'],
        datasets: [{
          label: 'Amount raised',
          data: [2000, 500, 730, 1300, 1600, 900, 200],
          borderWidth: 1,
          pointBackgroundColor: '#0000CD',
          pointBorderColor: '#1E90FF',
          borderColor: '#bae755',
            }
          ]
        },
      }
    );
  }

}
