import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaunchCampaignPageRoutingModule } from './launch-campaign-routing.module';

import { LaunchCampaignPage } from './launch-campaign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaunchCampaignPageRoutingModule
  ],
  declarations: [LaunchCampaignPage]
})
export class LaunchCampaignPageModule {}
