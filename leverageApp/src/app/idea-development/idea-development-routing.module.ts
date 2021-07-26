import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IdeaDevelopmentPage } from './idea-development.page';

const routes: Routes = [
  {
    path: '',
    component: IdeaDevelopmentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IdeaDevelopmentPageRoutingModule {}
