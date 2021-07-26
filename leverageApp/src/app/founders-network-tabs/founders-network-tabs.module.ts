import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoundersNetworkTabsPageRoutingModule } from './founders-network-tabs-routing.module';

import { FoundersNetworkTabsPage } from './founders-network-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoundersNetworkTabsPageRoutingModule
  ],
  declarations: [FoundersNetworkTabsPage]
})
export class FoundersNetworkTabsPageModule {}
