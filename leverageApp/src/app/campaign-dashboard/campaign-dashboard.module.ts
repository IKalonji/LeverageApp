import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampaignDashboardPageRoutingModule } from './campaign-dashboard-routing.module';

import { CampaignDashboardPage } from './campaign-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampaignDashboardPageRoutingModule
  ],
  declarations: [CampaignDashboardPage]
})
export class CampaignDashboardPageModule {}
