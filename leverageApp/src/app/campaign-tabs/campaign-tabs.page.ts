import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-tabs',
  templateUrl: './campaign-tabs.page.html',
  styleUrls: ['./campaign-tabs.page.scss'],
})
export class CampaignModalPage implements OnInit {

  campaignTabs = [
    {
      name: "Campaign Dashboard",
      tab: "campaign-dashboard",
      icon: ""
    },
    {
      name: "Launch Campaign",
      tab: "launch-campaign",
      icon: ""
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
