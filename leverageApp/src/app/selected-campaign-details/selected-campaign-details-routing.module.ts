import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectedCampaignDetailsPage } from './selected-campaign-details.page';

const routes: Routes = [
  {
    path: '',
    component: SelectedCampaignDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectedCampaignDetailsPageRoutingModule {}
