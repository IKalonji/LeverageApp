import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FundedCampaignsPage } from './funded-campaigns.page';

const routes: Routes = [
  {
    path: '',
    component: FundedCampaignsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FundedCampaignsPageRoutingModule {}
