import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncubationHubPage } from './incubation-hub.page';

const routes: Routes = [
  {
    path: '',
    component: IncubationHubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncubationHubPageRoutingModule {}
