import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignModalPage } from './campaign-tabs.page';

const routes: Routes = [
  {
    path: 'campaign-modal',
    component: CampaignModalPage,
    children: [
      {
        path: 'campaign-dashboard',
        loadChildren: () => import('../campaign-dashboard/campaign-dashboard.module').then( m => m.CampaignDashboardPageModule)
      },
      {
        path: 'launch-campaign',
        loadChildren: () => import('../launch-campaign/launch-campaign.module').then( m => m.LaunchCampaignPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'campaign-modal/campaign-dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampaignModalPageRoutingModule {}
