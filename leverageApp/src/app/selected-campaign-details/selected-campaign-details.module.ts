import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectedCampaignDetailsPageRoutingModule } from './selected-campaign-details-routing.module';

import { SelectedCampaignDetailsPage } from './selected-campaign-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectedCampaignDetailsPageRoutingModule
  ],
  declarations: [SelectedCampaignDetailsPage]
})
export class SelectedCampaignDetailsPageModule {}
