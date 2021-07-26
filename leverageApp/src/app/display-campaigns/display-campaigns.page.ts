import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-campaigns',
  templateUrl: './display-campaigns.page.html',
  styleUrls: ['./display-campaigns.page.scss'],
})
export class DisplayCampaignsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick(){
    this.router.navigate(['/selected-campaign-details'])
  }
    
}
