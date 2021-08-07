import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FundedCampaignsPageRoutingModule } from './funded-campaigns-routing.module';

import { FundedCampaignsPage } from './funded-campaigns.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FundedCampaignsPageRoutingModule
  ],
  declarations: [FundedCampaignsPage]
})
export class FundedCampaignsPageModule {}
