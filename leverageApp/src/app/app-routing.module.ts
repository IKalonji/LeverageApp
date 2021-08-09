import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'campaign-modal',
    loadChildren: () => import('./campaign-tabs/campaign-tabs.module').then( m => m.CampaignModalPageModule)
  },
  {
    path: 'display-campaigns',
    loadChildren: () => import('./display-campaigns/display-campaigns.module').then( m => m.DisplayCampaignsPageModule)
  },
  {
    path: 'founders-network-tabs',
    loadChildren: () => import('./founders-network-tabs/founders-network-tabs.module').then( m => m.FoundersNetworkTabsPageModule)
  },
  {
    path: 'incubation-hub',
    loadChildren: () => import('./incubation-hub/incubation-hub.module').then( m => m.IncubationHubPageModule)
  },
  {
    path: 'selected-campaign-details',
    loadChildren: () => import('./selected-campaign-details/selected-campaign-details.module').then( m => m.SelectedCampaignDetailsPageModule)
  },
  {
    path: 'workshop-list',
    loadChildren: () => import('./workshop-list/workshop-list.module').then( m => m.WorkshopListPageModule)
  },
  {
    path: 'start-up-services',
    loadChildren: () => import('./start-up-services/start-up-services.module').then( m => m.StartUpServicesPageModule)
  },
  {
    path: 'idea-development',
    loadChildren: () => import('./idea-development/idea-development.module').then( m => m.IdeaDevelopmentPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'inbox',
    loadChildren: () => import('./inbox/inbox.module').then( m => m.InboxPageModule)
  },
  {
    path: 'funded-campaigns',
    loadChildren: () => import('./funded-campaigns/funded-campaigns.module').then( m => m.FundedCampaignsPageModule)
  },
  {
    path: 'attend-workshop',
    loadChildren: () => import('./attend-workshop/attend-workshop.module').then( m => m.AttendWorkshopPageModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then( m => m.CoursesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
