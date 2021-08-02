import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-founders-network-tabs',
  templateUrl: './founders-network-tabs.page.html',
  styleUrls: ['./founders-network-tabs.page.scss'],
})
export class FoundersNetworkTabsPage implements OnInit {

  foundersNetworkTabs = [
    {
      name: "View Posts",
      tab: "founders-network-tabs-view-community",
      icon:""
    },
    {
      name: "Post to Community",
      tab: "founders-network-tabs-post-community",
      icon:""
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
