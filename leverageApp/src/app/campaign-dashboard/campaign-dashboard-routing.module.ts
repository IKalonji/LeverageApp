import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignDashboardPage } from './campaign-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: CampaignDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampaignDashboardPageRoutingModule {}
