import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoundersNetworkTabsViewCommunityPageRoutingModule } from './founders-network-tabs-view-community-routing.module';

import { FoundersNetworkTabsViewCommunityPage } from './founders-network-tabs-view-community.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoundersNetworkTabsViewCommunityPageRoutingModule
  ],
  declarations: [FoundersNetworkTabsViewCommunityPage]
})
export class FoundersNetworkTabsViewCommunityPageModule {}
