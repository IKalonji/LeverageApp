import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampaignModalPage } from './campaign-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CampaignModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampaignModalPageRoutingModule {}
