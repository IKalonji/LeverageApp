import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  dashCards = [
    {
      name:"My Campaigns",
      subheader: "View your campaigns / Launch a funding campaign",
      router: '/campaign-modal',
      color: 'primary',
      image: '../../assets/chart.png'
    },
    {
      name:"Fund Campaign",
      subheader: "View and fund Start-Up campaign",
      router: '/display-campaigns',
      color: 'secondary',
      image: '../../assets/funding.png'
    },
    {
      name:"Founders Network",
      subheader: "Connect with the Leverage network",
      router: '/founders-network-tabs',
      color: 'tertiary',
      image: '../../assets/network.png'
    },
    {
      name:"Incubation Hub",
      router: '/incubation-hub',
      subheader: "Workshops, Start-Up Courses and services",
      color: 'success',
      image: '../../assets/incubation_hub.png'
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
