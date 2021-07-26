import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkshopListPageRoutingModule } from './workshop-list-routing.module';

import { WorkshopListPage } from './workshop-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkshopListPageRoutingModule
  ],
  declarations: [WorkshopListPage]
})
export class WorkshopListPageModule {}
