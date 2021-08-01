import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CampaignModalPageRoutingModule } from './campaign-tabs-routing.module';

import { CampaignModalPage } from './campaign-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampaignModalPageRoutingModule
  ],
  declarations: [CampaignModalPage]
})
export class CampaignModalPageModule {}
