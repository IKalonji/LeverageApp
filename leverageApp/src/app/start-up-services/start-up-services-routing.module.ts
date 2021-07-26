import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartUpServicesPage } from './start-up-services.page';

const routes: Routes = [
  {
    path: '',
    component: StartUpServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartUpServicesPageRoutingModule {}
