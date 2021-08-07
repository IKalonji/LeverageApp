import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AttendWorkshopPageRoutingModule } from './attend-workshop-routing.module';

import { AttendWorkshopPage } from './attend-workshop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AttendWorkshopPageRoutingModule
  ],
  declarations: [AttendWorkshopPage]
})
export class AttendWorkshopPageModule {}
