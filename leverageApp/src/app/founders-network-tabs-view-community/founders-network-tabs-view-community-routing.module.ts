import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoundersNetworkTabsViewCommunityPage } from './founders-network-tabs-view-community.page';

const routes: Routes = [
  {
    path: '',
    component: FoundersNetworkTabsViewCommunityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoundersNetworkTabsViewCommunityPageRoutingModule {}
