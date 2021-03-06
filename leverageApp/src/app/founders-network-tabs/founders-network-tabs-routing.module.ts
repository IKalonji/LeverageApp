import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FoundersNetworkTabsPage } from './founders-network-tabs.page';

const routes: Routes = [
  {
    path: 'founders-network-tabs',
    component: FoundersNetworkTabsPage,
    children: [
      {
        path: 'founders-network-tabs-view-community',
        loadChildren: () => import('../founders-network-tabs-view-community/founders-network-tabs-view-community.module').then(m => m.FoundersNetworkTabsViewCommunityPageModule)
      },
      {
        path: 'founders-network-tabs-post-community',
        loadChildren: () => import('../founders-network-tabs-post-community/founders-network-tabs-post-community.module').then(m => m.FoundersNetworkTabsPostCommunityPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'founders-network-tabs/founders-network-tabs-view-community',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FoundersNetworkTabsPageRoutingModule {}
