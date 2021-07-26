import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayCampaignsPage } from './display-campaigns.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayCampaignsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayCampaignsPageRoutingModule {}
