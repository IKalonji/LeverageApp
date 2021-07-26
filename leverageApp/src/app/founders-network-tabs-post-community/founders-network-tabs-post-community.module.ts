import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoundersNetworkTabsPostCommunityPageRoutingModule } from './founders-network-tabs-post-community-routing.module';

import { FoundersNetworkTabsPostCommunityPage } from './founders-network-tabs-post-community.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoundersNetworkTabsPostCommunityPageRoutingModule
  ],
  declarations: [FoundersNetworkTabsPostCommunityPage]
})
export class FoundersNetworkTabsPostCommunityPageModule {}
