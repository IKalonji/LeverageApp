import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-modal',
  templateUrl: './campaign-modal.page.html',
  styleUrls: ['./campaign-modal.page.scss'],
})
export class CampaignModalPage implements OnInit {

  modalCards = [{
    name: 'campaign dashboard',
    router: '/campaign-dashboard'
  },{
    name: 'launch funding campaign',
    router: '/launch-campaign'
  }]
  constructor() { }

  ngOnInit() {
  }

}
