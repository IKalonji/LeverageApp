import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartUpServicesPageRoutingModule } from './start-up-services-routing.module';

import { StartUpServicesPage } from './start-up-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartUpServicesPageRoutingModule
  ],
  declarations: [StartUpServicesPage]
})
export class StartUpServicesPageModule {}
