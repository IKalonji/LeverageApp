import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  dashCards = [
    {
      name:"my campaigns",
      router: '/campaign-modal'
    },
    {
      name:"Fund a campaign",
      router: '/display-campaigns'
    },
    {
      name:"founders network",
      router: '/founders-network-tabs'
    },
    {
      name:"incubation hub",
      router: '/incubation-hub'
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
