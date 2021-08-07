import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AttendWorkshopPage } from './attend-workshop.page';

const routes: Routes = [
  {
    path: '',
    component: AttendWorkshopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendWorkshopPageRoutingModule {}
