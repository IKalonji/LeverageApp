import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-campaign-dashboard',
  templateUrl: './campaign-dashboard.page.html',
  styleUrls: ['./campaign-dashboard.page.scss'],
})
export class CampaignDashboardPage implements OnInit, AfterViewInit {


  @ViewChild('barChartCanvas') barChartCanvas: ElementRef;

  barChart: any;
  title = "Express Cash App"

  constructor() {
    Chart.register(...registerables)
   }

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.barChartMethod();
  }

  barChartMethod() {
    this.barChart = new Chart(this.barChartCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ['BJP', 'INC', 'AAP', 'CPI', 'CPI-M', 'NCP'],
        datasets: [{
          label: '# of Votes',
          data: [200, 50, 30, 15, 20, 34],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 206, 86)',
            'rgb(75, 192, 192)',
            'rgb(153, 102, 255)',
            'rgb(255, 159, 64)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
        }
      }
    });
  }

}
