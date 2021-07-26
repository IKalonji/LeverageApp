import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaunchCampaignPage } from './launch-campaign.page';

const routes: Routes = [
  {
    path: '',
    component: LaunchCampaignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaunchCampaignPageRoutingModule {}
