import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayCampaignsPageRoutingModule } from './display-campaigns-routing.module';

import { DisplayCampaignsPage } from './display-campaigns.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayCampaignsPageRoutingModule
  ],
  declarations: [DisplayCampaignsPage]
})
export class DisplayCampaignsPageModule {}
